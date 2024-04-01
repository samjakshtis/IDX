import React, { useState, useEffect } from 'react';
import './workingpapers.scss';

function WorkingPapers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/working-paper');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Working Papers</h1>
            <ul className="tile-list">
                {data.map((item, index) => (
                    <li key={index}>
                        <a href={item.paper_url} className="tile-link">
                            <h2>{item.title}</h2>
                            <p id="Authors">Authors: {item.authors}</p>
                            <p id="Abstract-title">Abstract</p>
                            <div className="abstract-wrapper">
                                <p id="Abstract">{item.abstract}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkingPapers;
