import React, { useState } from 'react';
import atrocity from '../../imgs/atrocity.jpg'
import tomorrow from '../../imgs/tomorrow.png'
import './landingpage.css'
import { SpotifyOutlined, YoutubeOutlined } from '@ant-design/icons';


const LandingPage = () => {
    return (
        <div className="landing-wrapper">
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
            <img 
                src={atrocity} 
                alt="Description" 
                style={{ width: '600px', height: 'auto', margin: 0, padding: 0, display: 'block'}} />
        <div style={{ textAlign: 'center', padding: '2rem', flex: 1}}>
            <h1 className='rubik-glitch-regular'>Escucha Nuestro Nuevo Sencillo</h1>
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/AcoIgzjy-uQ"
                title="Youtube player"
                allow="accelerometer; autoplay; local-fonts; fullscreen;"
                style={{ border: "none"}}
            ></iframe>
            <div className='streaming-links'>
            <a href="https://open.spotify.com/track/3qVLf1ZkJwT1rq60rvMeb1?si=5f6f8f4fbe9447f7" target='_blank' rel="noopener noreferrer" className='spotify-link'>
                <SpotifyOutlined style={{ fontSize: '35px'}}/>
            </a>
            <a href="https://music.youtube.com/watch?v=zoT6xw1BM-8&si=4LsUQMMLy0899Zer" target='_blank' rel="noopener noreferrer" className='youtube-link'>
                <YoutubeOutlined style={{ fontSize: '35px'}}/>
            </a>
                
            </div>
        </div>
        </div>
            <div className="tomorrow-image">
                <img src={tomorrow} alt="Tomorrow image" />
                <div style={{ textAlign: 'center', padding: '2rem', flex: 1}}>
                    <h1 className='rubik-glitch-regular'>Escucha Tomorrow</h1>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/AbO-v0WwVmo"
                        title="Youtube player"
                        allow="accelerometer; autoplay; local-fonts; fullscreen;"
                        style={{ border: "none"}}
                    ></iframe>
                    <div className='streaming-links'>
                        <a href="https://open.spotify.com/track/1Z1zr5Y9Sg6SiZGr8nBF0I?si=eb42d13f88294277" target='_blank' rel="noopener noreferrer" className='spotify-link'>
                            <SpotifyOutlined style={{ fontSize: '35px'}}/>
                        </a>
                        <a href="https://music.youtube.com/watch?v=S-2Po3uVQno" target='_blank' rel="noopener noreferrer" className='youtube-link'>
                            <YoutubeOutlined style={{ fontSize: '35px'}}/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LandingPage;