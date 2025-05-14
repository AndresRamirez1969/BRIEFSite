import React, {useEffect, useState} from 'react';

const Tocadas = () => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.seated.com/app.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return(
        <div style={{marginTop: '60px', width: "80%", marginLeft: 'auto', marginRight: 'auto'}}>
            <div id="seated-55fdf2c0" data-artist-id="27064dd0-b033-480e-8216-206faf1f6e15" data-css-version="3"></div>
        </div>
    )
};

export default Tocadas;