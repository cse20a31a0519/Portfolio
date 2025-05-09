import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navbar1() {
  return (
    <>
      <Navbar data-bs-theme="dark" className='fixed-top bg-gray-900 shadow-lg py-3' expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-xl font-bold'>TEJA SRI PASALA</Navbar.Brand>
          
          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible nav links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="gap-3 ms-auto text-decoration-none">
              <Link to="/" className='text-decoration-none text-light text-md'>Home</Link>
              <Link to="/About" className='text-decoration-none text-light'>About</Link>
              <Link to="/Skills" className='text-decoration-none text-light'>Skills</Link>
              <Link to="/Projects" className='text-decoration-none text-light'>Projects</Link>
              <Link to="/Contact" className='text-decoration-none text-light'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
