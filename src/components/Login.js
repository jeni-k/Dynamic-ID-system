import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [className, setClassName] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!name || !id || !className) {
            alert('Please fill in all fields');
            return;
        }

        // Save details in localStorage
        localStorage.setItem(
            'userDetails',
            JSON.stringify({ name, id, class: className })
        );

        // Navigate to QR code and barcode page
        navigate('/qrcode');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Enter ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Enter Class"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleLogin} style={styles.button}>
                    Login
                </button>
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
        minHeight: '100vh',
        backgroundColor: '#f4f4f9',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Login;
