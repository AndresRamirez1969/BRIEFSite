import React from 'react';
import atrocity from '../../imgs/atrocity.jpg'
import tomorrow from '../../imgs/tomorrow.png'
import './landingpage.css'
import { SpotifyOutlined, YoutubeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';


const LandingPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.8}}
            exit={{ opacity: 0, y: -20 }}
        >
        <div className="landing-wrapper">
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
            <img 
                src={atrocity} 
                alt="Description" 
                style={{ width: '600px', height: 'auto', margin: 0, padding: 0, display: 'block', borderRadius: '8px'}} />
        <div style={{ textAlign: 'center', padding: '2rem', flex: 1}}>
            <h1 className='rubik-glitch-regular'>Escucha Nuestro Nuevo Sencillo</h1>
            <iframe
                width="100%"
                height="420"
                src="https://www.youtube.com/embed/AcoIgzjy-uQ"
                title="Youtube player"
                allow="accelerometer; autoplay; local-fonts; fullscreen;"
                style={{ borderRadius: "9px"}}
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
            <div style={{ textAlign: 'left', display: 'block'}}>
                <div style={{ textAlign: 'center', padding: '2rem', flex: 1}}>
                    <h1 className='rubik-glitch-regular'>Mas Canciones</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem'}}>
                        <div style={{ maxWidth: '300px', textAlign: 'left'}}>
                            <p className='rubik-glitch-regular'>I'm holding on, together in the corner I wait</p>
                            <p className='rubik-glitch-regular'>I'm surrounded by, the breeding and breathing I hate</p>
                            <p className='rubik-glitch-regular'>Because it's in those eyes of yours that I am leaving</p>
                            <p className='rubik-glitch-regular'>Long story short I just keep digging, digging, digging</p>
                        </div>
                    <iframe
                        width="60%"
                        height="500"
                        src="https://www.youtube.com/embed/AbO-v0WwVmo"
                        title="Youtube player"
                        allow="accelerometer; autoplay; local-fonts; fullscreen;"
                        style={{ borderRadius: "9px"}}
                    ></iframe>
                        <div style={{ maxWidth: '300px', textAlign: 'right'}}>
                            <p className='rubik-glitch-regular'>Tomorrow simplified time goes by</p>
                            <p className='rubik-glitch-regular'>Because I have been wronged</p>
                            <p className='rubik-glitch-regular'>I've been wronged</p>
                        </div>
                    </div>
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
        </motion.div>
    );
};

export default LandingPage;