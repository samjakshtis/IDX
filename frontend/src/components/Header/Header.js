import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <header className="App-header">
            <div className="header-left">
                <Link to="/" className="header-name">Sam Jakshtis</Link>
            </div>
            <div className="header-right">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/workingpaper">Working Paper</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/podcasts">Podcasts</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;





