import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './Header.css';

function Header() {
    return (
      <div className="Header">
        <Navbar dark color="primary" >
          <div className="container">
            <NavbarBrand className='NavBrand' href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
      </Navbar>
      </div>
    );
  }
  
  export default Header;