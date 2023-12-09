import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './Trackmitra.css'; // Import the CSS file

const Trackmitra = () => {
    const navigate = useNavigate();

    const handleDownload = async (url) => {
        try {
            const response = await axios.get(url, { responseType: 'blob' });
            const blob = new Blob([response.data], { type: 'text/csv' });
            saveAs(blob, 'data.csv');
        } catch (error) {
            console.error('Download failed', error);
        }
    };

    return (
        <div className="trackmitra-container" style={{
            backgroundImage: "url('/athlete.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <h1 className="branding">Trackmitra</h1>
            <button onClick={() => navigate('/rawdata')}>Show Raw Data</button>
            <button onClick={() => handleDownload('http://127.0.0.1:5000/download/raw_data')}>Download Raw Data</button>
            <button onClick={() => navigate('/heatsdata')}>Show Heats Data</button>
            <button onClick={() => handleDownload('http://127.0.0.1:5000/download/heats_data')}>Download Heats Data</button>
        </div>
    );
};

export default Trackmitra;
