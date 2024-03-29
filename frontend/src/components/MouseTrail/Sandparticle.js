// SandParticle.js

import React, { useState, useEffect } from 'react';
import './MouseTrail.scss';

const SandParticle = ({ x, y }) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const fadeOut = setTimeout(() => {
            setOpacity(0);
        }, 1000); // Adjust fade out duration as needed

        return () => clearTimeout(fadeOut);
    }, []);

    return <div className="sand-particle" style={{ left: x, top: y, opacity }}></div>;
};

export default SandParticle;
