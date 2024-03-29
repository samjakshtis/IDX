// MouseSand.js
///TSParticles https://particles.js.org/

import React, { useState } from 'react';
import SandParticle from './Sandparticle.js';

const MouseSand = () => {
    const [particles, setParticles] = useState([]);

    const handleMouseMove = (e) => {
        console.log("Mouse moved"); // Debugging statement
        // e.stopPropagation();
        const newParticles = particles.concat({
            x: e.pageX,
            y: e.pageY
        });
        setParticles(newParticles);

        // Remove particles after some time
        setTimeout(() => {
            setParticles([]);
        }, 1000); // Adjust the duration particles stay on the screen
    };

    console.log("MouseSand rendered"); // Debugging statement

    return (
        <div onMouseMove={handleMouseMove}>
            {particles.map((particle, index) => (
                <SandParticle key={index} x={particle.x} y={particle.y} />
            ))}
        </div>
    );
};


export default MouseSand;

