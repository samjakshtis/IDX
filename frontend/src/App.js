import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkingPapers from './components/WorkingPapers/WorkingPapers.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Movies from './components/Movies/Movies.js';
import Podcasts from './components/Podcasts/Podcasts.js';
import './App.css'
import MouseSand from './components/MouseTrail/mousetrail.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workingpaper" element={<WorkingPapers />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/podcasts" element={<Podcasts />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <MouseSand />
      </div>
    </BrowserRouter>
  );
}

export default App;
