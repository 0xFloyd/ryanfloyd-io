import React from 'react';
import './App.css';


function Navbar(props) {
    return <div className="header-container">
                <img className="x-logo"
                    src="/img/x-light.png"
                    alt=""></img>
                <div className="collapsible-menu">
                    <div className="menu-content">
                        <ul className="menu-list">
                            <li className="menu-item"><span className="menu-dot">• </span>Home</li>
                            <li className="menu-item">Life at X</li>
                            <li className="menu-item">Careers</li>
                            <li className="menu-item">News</li>
                        </ul>
                    </div>
                </div>
            </div>
}

export default Navbar;