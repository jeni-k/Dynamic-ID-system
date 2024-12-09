import React, { useEffect, useState } from 'react';
import QRBarcode from './QRBarCode';

const Dashboard = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Retrieve details from local storage
        const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
        setUserDetails(storedDetails);
    }, []);

    if (!userDetails) return <div>Loading...</div>;

    // Combine details into a string to encode in the QR code
    const encodedDetails = `
        Name: ${userDetails.name}, 
        Email: ${userDetails.email}, 
        ID: ${userDetails.id}, 
        Class: ${userDetails.className}
    `;

    return (
        <div className="dashboard">
            <h1>Welcome, {userDetails.name}</h1>
            <QRBarcode details={encodedDetails} />
        </div>
    );
};

export default Dashboard;
