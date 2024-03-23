// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/workingpaper">Working Paper</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/podcasts">Pod Casts</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;


