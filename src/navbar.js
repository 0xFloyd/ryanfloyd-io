import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FloydLogo from './img/Floyd-logo-white-outline.png';
//import LogoLoad from './logo-load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import Button from 'react-bootstrap/Button';
//import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import { render } from '@testing-library/react';


class WebsiteMenu extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
       
      };
    }

    render() {
        return <div className="header-container">
            <img id="floyd-logo-outline" src={FloydLogo} alt="floyd-logo"></img>
            <div></div>
            <div className="menu-icon">
                <FontAwesomeIcon id="fa-menu-icon" icon={faBars} />
            </div>
        </div>
    }
} 



export default WebsiteMenu;
 

/* 
<div className="collapsible-menu">
                    <div className="menu-content">
                        <ul className="menu-list">
                            <li className="menu-item"><span className="menu-dot">• </span>Home</li>
                            <li className="menu-item">Life at X</li>
                            <li className="menu-item">Careers</li>
                            <li className="menu-item">News</li>
                        </ul>
                    </div>
                    <HamburgerMenu />
                </div>
*/