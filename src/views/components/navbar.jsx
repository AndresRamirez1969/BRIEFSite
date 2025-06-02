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
                <Link to="/">Home</Link>
                <Link to="/nosotros">Bio</Link>
            </div>
            <div className="nav-center">
                <Link to="/" viewTransition>
                <img src={logo} alt="Logo" className="nav-logo"/>
                </Link>
            </div>
            <div className="nav-right">
                <Link to="/contacto">Contacto</Link>
                <Link to="/tocadas">Shows</Link>
                <img src={logowhite} alt="Logo" className="nav-logowhite"/>
            </div>
            </div>
        </nav>
    );
};