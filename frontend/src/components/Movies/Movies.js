import React, { useState, useEffect } from 'react';
import './movies.scss';

function Movies() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/movies');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    data.sort((a, b) => {
        // Convert date strings to Date objects
        const dateA = new Date(a.date_entered);
        const dateB = new Date(b.date_entered);

        // Compare dates
        return dateB - dateA; // Sorting in descending order (latest first)
    });


    return (
        <div>
            <h1>Movies I Reccomend</h1>
            <ul className="tiles">
                {data.map((item, index) => (
                    <li key={index}>
                        <a href={item.movie_url} target="_blank" className="movie_url">
                            <h2>{item.title}</h2>
                            <p id="Movie-rating">Rating: {item.rating}/10</p>
                            <div className="movie-wrapper">
                                <p id="movie">Release Date: {new Date(item.date_entered).getFullYear()}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;