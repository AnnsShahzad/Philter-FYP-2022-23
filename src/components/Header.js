import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
      <div className="Header">
        {/* NAVBAR Start */}

        <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
          <Container>
            <Navbar.Brand  style={{fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase'}} href='#'>Philter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse  className="justify-content-end" id='basic-navbar-nav'>
              <Nav style={{fontSize: 17, textTransform: 'uppercase'}}>
                <Nav.Link className='active' href='#'>Manufacturer</Nav.Link>
                <Nav.Link href='#'>Distributor</Nav.Link>
                <Nav.Link href='#'>Analytics</Nav.Link>
                <Nav.Link href='#'>Account</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>

        {/* NAVBAR END */}
      </div>
    );
  }
  
  export default Header;