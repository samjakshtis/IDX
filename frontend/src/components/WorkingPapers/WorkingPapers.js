import React, { useState, useEffect } from 'react';
import './workingpapers.scss';

function WorkingPapers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Working Papers</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <h2>{item.Title}</h2>
                        <p>Authors: {item.Authors}</p>
                        <p>Abstract: {item.Abstract}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkingPapers;
