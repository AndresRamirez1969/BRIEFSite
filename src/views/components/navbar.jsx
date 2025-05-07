import React from 'react';
import './navbar.css';
import logo from '../../imgs/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div className='nav-content'>
            <div className="nav-left">
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
            </div>
            </div>
        </nav>
    );
};