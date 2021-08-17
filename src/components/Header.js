import DiscordIcon from './DiscordIcon.js';
import {
    Link
} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div id="header-content">
                <span id='branding'>
                    <Link to='/'>
                        <img src='mushroom.png' alt='logo' id='brand-icon' />
                    </Link>
                    <Link to='/'>
                        <h2>{props.title}</h2>
                    </Link>
                </span>

                {/* TODO: 
                    - These links can be changed to grab from some databse of links
                */}
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

                <a href="https://discord.gg/X8BENaR9Ft">
                    <DiscordIcon />
                </a>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'celium'
}

export default Header
