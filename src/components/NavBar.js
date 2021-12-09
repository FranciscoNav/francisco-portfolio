import React from 'react';
import CiscoPic from '../img/CiscoPic.jpg';
import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <div className="navBar">
            <nav className="nav">
                <div className="profile">
                    <img  src={CiscoPic} alt='' />
                </div>
                <ul className="nav-iteams">
                    <li className="nav-iteam">
                        <NavLink to='/' exact activeClassName='nav-active'>Home</NavLink>
                    </li>
                    <li className="nav-iteam">
                        <NavLink to='/about' exact activeClassName='nav-active'>About</NavLink>
                    </li>

                    <li className="nav-iteam">
                        <NavLink to='/portfolio' exact activeClassName='nav-active'>Portfolio</NavLink>
                    </li>

                    <li className="nav-iteam">
                        <NavLink to='/blogs' exact activeClassName='nav-active'>Blogs</NavLink>
                    </li>

                    <li className="nav-iteam">
                        <NavLink to='/contact' exact activeClassName='nav-active'>Contact</NavLink>    
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
