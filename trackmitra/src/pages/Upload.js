import React, { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import './Upload.css'; // Import the CSS file

const Upload = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setUploaded(false);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);
            await axios.post('http://127.0.0.1:5000/upload', formData);
            setUploaded(true);
        } catch (error) {
            alert('Upload failed');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-container" style={{
            backgroundImage: "url('/athlete.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <h1 className="branding">Trackmitra</h1>
            <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
            {uploaded && <div>Uploaded!</div>}
        </div>
    );
};

export default Upload;
