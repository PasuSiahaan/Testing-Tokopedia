import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () =>{
        return (
            <nav className="navbar  bg-primary">
                <ul>
                    <li>
                        <Link to='/'>Pokemon List</Link>
                    </li>
                    <li>
                        <Link to='/my-pokemon-list'>My Pokemon List</Link>
                    </li>
                </ul>
            </nav>
        )
}
export default Navbar;