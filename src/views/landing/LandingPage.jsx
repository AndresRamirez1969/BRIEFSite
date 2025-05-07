import React from 'react';
import atrocity from '../../imgs/atrocity.jpg'
import './landingpage.css'

const LandingPage = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
            <img 
                src={atrocity} 
                alt="Description" 
                style={{ width: '600px', height: 'auto', margin: 0, padding: 0, display: 'block'}} />
        <div style={{ textAlign: 'center', padding: '2rem', flex: 1}}>
            <h1 className='custom-font'>Escucha Nuestro Nuevo Sencillo</h1>
            <iframe 
                style={{ borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/track/3qVLf1ZkJwT1rq60rvMeb1?utm_source=generator" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Player"
            ></iframe>
            <a href="https://linktr.ee/brief_band" target='_blank' rel="noopener noreferrer" className='button-link'
            >
                Mas Canciones
            </a>
        </div>
        </div>
    );
};

export default LandingPage;