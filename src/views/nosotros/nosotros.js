import React from 'react';
import Andres from '../../imgs/Andres.jpg';
import Mario from '../../imgs/Mario.jpg';
import Luis from '../../imgs/Luis.jpg';
import Billy from '../../imgs/Billy.jpg';
import './nosotros.css';
import { motion } from 'framer-motion';

const Nosotros = () => {
    return (
        <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.8}}
                    exit={{ opacity: 0, y: -20 }}
                >
        <div
            style={{  
                display: 'flex', // row layout
                justifyContent: 'center', // center the row
                alignItems: 'flex-start', // align items to top
                gap: '40px', // uniform space between members
                marginTop: '10px',
                padding: '20px'
                }}>
                {[{ src: Andres, name: "Andres", role: "Guitarra/Voz"}, { src: Billy, name: "Billy", role: "Voz"}, { src: Mario, name: "Mario", role: "Bajo"}, { src: Luis, name: "Luis", role: "Batería/Voz"}].map((member, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <img 
                            src={member.src}
                            alt={member.name}
                            className="member-image"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px'}}
                        />
                        <p className='rubik-glitch-regular' style={{ textAlign: 'center', marginTop: '10px', fontSize: '30px', lineHeight: '1.1'}}>
                            {member.name}
                        </p>
                        <p className='rubik-glitch-regular' style={{ textAlign: 'center', fontSize: '15px', marginTop: '0.5px', lineHeight: '0.1'}}>
                            {member.role}
                        </p>
                    </div>
                ))}
                <h1></h1>
        </div>
        </motion.div>
    )
};

export default Nosotros;