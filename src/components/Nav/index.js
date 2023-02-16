import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function AppNavbar() {

  return (
    <>
      <div className='navbar-con'>
        <Nav className="justify-content-center">
          <Nav.Link as={Link} to='/Chazs-React-Portfolio'>
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to='portfolio'>
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to='contact'>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to='resume'>
            Resume
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default AppNavbar;