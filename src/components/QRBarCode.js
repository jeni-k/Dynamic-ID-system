import React, { useEffect, useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import JsBarcode from 'jsbarcode';

const QRBarcode = () => {
    const [user, setUser] = useState(null);
    const [barcodeData, setBarcodeData] = useState('Initializing...');
    const barcodeRef = useRef(null);

    useEffect(() => {
        // Retrieve user details from localStorage
        const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
        setUser(storedDetails);

        const interval = setInterval(() => {
            // Update barcode with current time
            const currentTime = new Date().toLocaleTimeString();
            const newBarcodeData = `Time: ${currentTime}`;
            setBarcodeData(newBarcodeData);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (barcodeRef.current && barcodeData) {
            JsBarcode(barcodeRef.current, barcodeData, {
                format: 'CODE128',
                lineColor: '#000',
                width: 2,
                height: 40,
                displayValue: true,
            });
        }
    }, [barcodeData]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Student QR Code & Barcode</h2>
            <div style={styles.card}>
                {/* QR Code */}
                <QRCodeCanvas value={JSON.stringify(user)} size={150} />
                <br />
                {/* Barcode */}
                <svg ref={barcodeRef}></svg>
                {/* Student Details */}
                <div style={styles.details}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Class:</strong> {user.class}</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
        fontFamily: '"Arial", sans-serif',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
    },
    details: {
        marginTop: '20px',
        fontSize: '16px',
        color: '#555',
    },
};

export default QRBarcode;
