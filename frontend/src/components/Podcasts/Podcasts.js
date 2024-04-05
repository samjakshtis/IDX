import React, { useState, useEffect } from "react";
import "react-bubble-ui/dist/index.css";
import './podcasts.scss'

function Podcasts() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/podcasts');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Podcasts I Reccommend</h1>
            <ul className="ptiles">
                {data.map((item, index) => (
                    <a href={item.podcast_url} target="_blank" className="podcast_url">
                        <li key={index} className="podcast-item">
                            <div className="podcast-content">
                                <h2 style={{ marginTop: '50px' }}>{item.title}</h2>
                                <p>{item.About}</p>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </div >
    );
}

export default Podcasts;



