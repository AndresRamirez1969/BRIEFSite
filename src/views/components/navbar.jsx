import React, {useState, useEffect} from 'react';
import './navbar.css';
import logo from '../../imgs/logo.png';
import logowhite from '../../imgs/logowhite.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        let timeoutId;
        const controlNavbar = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
            if (window.scrollY > lastY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastY(window.scrollY);
            }, 10);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastY]);

    return (
        <nav className={`navbar ${showNavbar ? 'active' : 'hidden'}`}>
            <div className='nav-content'>
            <div className="nav-left">
                <img src={logowhite} alt="Logo" className="nav-logowhite"/>
                <a href="/tocadas">Tocadas</a>
                <a href="/noticias">Noticias</a>
            </div>
            <div className="nav-center">
                <Link to="/">
                <img src={logo} alt="Logo" className="nav-logo" href="/" />
                </Link>
            </div>
            <div className="nav-right">
                <a href="/contacto">Contacto</a>
                <a href="/FAQ">FAQ</a>
                <img src={logowhite} alt="Logo" className="nav-logowhite"/>
            </div>
            </div>
        </nav>
    );
};