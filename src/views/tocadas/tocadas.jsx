import React, {useEffect, useState} from 'react';
import './tocadas.css';
import { motion } from 'framer-motion';

const Tocadas = () => {
    useEffect(() => {
        const handleLoad = () => {
            const script = document.createElement('script');
            script.src = "https://widget.seated.com/app.js";
            script.async = true;
            document.body.appendChild(script);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return(
        <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.8}}
                    exit={{ opacity: 0, y: -20 }}
                >
        <div className='tocadas-wrapper'>
            <div style={{ width: "80%", margin: "0 auto", paddingTop: "80px"}}>
                <div id="seated-55fdf2c0" data-artist-id="27064dd0-b033-480e-8216-206faf1f6e15" data-css-version="3"></div>
            </div>
        </div>
        </motion.div>
    )
};

export default Tocadas;