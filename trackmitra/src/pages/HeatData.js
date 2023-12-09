import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './CSVReader.css'; // Import the CSS file

const HeatData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('http://127.0.0.1:5000/download/heats_data', {
            download: true,
            header: true,
            complete: (results) => {
                setData(results.data);
            }
        });
    }, []);

    return (
        <table className="csv-table">
            <thead>
                <tr>
                    {data[0] && Object.keys(data[0]).map((heading) => <th key={heading}>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {Object.values(row).map((value, i) => <td key={i}>{value}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HeatData;
