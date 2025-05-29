import React from 'react';
import Andres from '../../imgs/Andres.jpg';
import Mario from '../../imgs/Mario.jpg';
import Luis from '../../imgs/Luis.jpg';
import Billy from '../../imgs/Billy.jpg';
import './nosotros.css';

const Nosotros = () => {
    return (
        <div 
            style={{ 
                display: 'flex', // row layout
                justifyContent: 'center', // center the row
                alignItems: 'flex-start', // align items to top
                gap: '40px', // uniform space between members
                marginTop: '10px',
                padding: '20px'
                }}>
                {[{ src: Andres, name: "Andres"}, { src: Billy, name: "Billy"}, { src: Mario, name: "Mario"}, { src: Luis, name: "Luis"}].map((member, index) => (
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
                        <p className='rubik-glitch-regular' style={{ textAlign: 'center', marginTop: '10px', fontSize: '30px'}}>
                            {member.name}
                        </p>
                    </div>
                ))}
        </div>
    )
};

export default Nosotros;