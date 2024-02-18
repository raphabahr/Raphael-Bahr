// Animation.js

import React, { useEffect } from 'react';
import "./Animation.css";

const Animation = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const handleScroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop -400;
                let height = sec.offsetHeight;

                if (top >= offset && top < offset + height) {
                    sec.classList.add('show-animate');
                }
                else {
                    sec.classList.remove('show-animate');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return null;
};

export default Animation;
