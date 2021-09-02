import React from 'react'
import {
    Link
} from "react-router-dom";

function NewHeader() {
    return (
        <div class="header">
            <Link to='/' className="logo">
                <img src='mushroom.png' alt='logo' id='brand-icon' />
            </Link>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul className='links'>
                                <li>
                                    <Link to='/join'>Join</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/projects'>Projects</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewHeader
