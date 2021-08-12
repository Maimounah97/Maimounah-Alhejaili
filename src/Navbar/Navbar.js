import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import * as ReactBootStrp from "react-bootstrap";
import { classes } from './Navbar.css';
import logo from './logo3.png';
function Navbar() {
  return (
    <div className="Navbar ">
      <ReactBootStrp.Navbar bg="dark" variant="dark" id="navbar"className=" shadow-lg p-3 mb-5 rounded"  expand="lg">
        <div className="container">
        <ReactBootStrp.Navbar.Brand ><img
        src={logo}
        width="150"
        height="50"
        className="d-inline-block align-top"
        
      /></ReactBootStrp.Navbar.Brand>
        <ReactBootStrp.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrp.Navbar.Collapse  id="basic-navbar-nav">
          <ReactBootStrp.Nav className="mr-auto">
            <ReactBootStrp.Nav.Link ><NavLink  className="link" to='/About'>About</NavLink> </ReactBootStrp.Nav.Link>
            <ReactBootStrp.Nav.Link > <NavLink  className="link" to='/Projects'>Projects</NavLink> </ReactBootStrp.Nav.Link>
            <ReactBootStrp.Nav.Link> <NavLink  className="link" to='/Articles'>Articles</NavLink></ReactBootStrp.Nav.Link>
            <ReactBootStrp.Nav.Link> <NavLink className="link" to='/Contact'>Contact</NavLink></ReactBootStrp.Nav.Link>

          </ReactBootStrp.Nav>

        </ReactBootStrp.Navbar.Collapse>
        </div>
      </ReactBootStrp.Navbar>
    </div>
  );
}

export default Navbar;