import React from 'react'
import {
    Link
} from "react-router-dom";

function NewHeader() {
    return (
        <div className='header'>
            <Link to='/'>
                <img src='mushroom.png' alt='logo' className='brand-icon' />
            </Link>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" id="toggler"/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul className='links'>
                                <li>
                                    <Link to='/' onClick={closeMenu}>Home</Link>
                                </li>
                                <li>
                                    <Link to='/join' onClick={closeMenu}>Join</Link>
                                </li>
                                <li>
                                    <Link to='/about' onClick={closeMenu}>About</Link>
                                </li>
                                <li>
                                    <Link to='/projects' onClick={closeMenu}>Projects</Link>
                                </li>
                                <li>
                                    <Link to='/blog' onClick={closeMenu}>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/contact' onClick={closeMenu}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function closeMenu() {
    document.getElementById('toggler').checked = false;
}

export default NewHeader
