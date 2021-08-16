import { BsSearch } from 'react-icons/bs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
                <BsSearch id='search-icon' />
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'celium'
}

export default Header
