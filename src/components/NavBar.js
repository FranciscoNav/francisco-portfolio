import React from 'react';
import CiscoPic from '../img/CiscoPic.jpg';
import {NavLink, link} from "react-router-dom";

function NavBar() {


    return (
        <div className="NavBar">
            <div className="profilePic">
                {/* <img  src={CiscoPic} alt='' /> */}
            </div>
            <nav className="nav">
                <ul className="Nav-iteams"> 
                    <li className="Nav-iteams">
                        <NavLink to='/' activeClassName='activeNav'>Home</NavLink>
                        <NavLink to='/about' activeClassName='activeNav'>About</NavLink>
                        <NavLink to='/portfolio' activeClassName='activeNav'>Portfolio</NavLink>
                        <NavLink to='/blogs' activeClassName='activeNav'>Blog</NavLink>
                        <NavLink to='/contact' activeClassName='activeNav'>Conact</NavLink>
                    </li>
                </ul>
            </nav>
            <footer className="footer">
                <p>Francisco Naveira</p>
            </footer>
        </div>
    )
}

export default NavBar
