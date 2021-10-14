import React from 'react';
import CiscoPic from '../img/CiscoPic.jpg';
import {NavLink, link} from "react-router-dom";

function NavBar() {

    return (
        <div className="navBar">
            <nav className="nav">
                <div className="profile">
                    <img  src={CiscoPic} alt='' />
                </div>
                <ul className="nav-iteams"> 
                    <li className="nav-iteam">
                        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li className="nav-iteam">
                        <NavLink to='/about' exact activeClassName='active'>About</NavLink>
                    </li>
                    <li className="nav-iteam">
                        <NavLink to='/portfolio' exact activeClassName='active'>Portfolio</NavLink>
                    </li>
                    <li className="nav-iteam">
                        <NavLink to='/blogs' exact activeClassName='active'>Blog</NavLink>
                    </li>
                    <li className="nav-iteam">
                        <NavLink to='/contact' exact activeClassName='active'>Conact</NavLink>    
                    </li>
                </ul>
                <footer className="footer">
                    <p>Francisco Naveira</p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar
