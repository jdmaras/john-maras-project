import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../Button/Button';
import HamburgerMenu from './HamburgerMenu';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //sets state to true for the hamburger menu to toggle
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //displays depending on screen size
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        The John Maras Project
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {!button && <div>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>}
                        {button && <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                        </ul>}
                        {button && <Button buttonStyle='btn--outline'>Resume Download</Button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar