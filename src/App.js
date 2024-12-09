import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import QRBarcode from './components/QRBarCode';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/qrcode" element={<QRBarcode />} />
            </Routes>
        </Router>
    );
}

export default App;
