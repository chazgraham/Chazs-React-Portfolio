import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function AppNavbar() {

  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='Chazs-React-Portfolio'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='resume'>
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to='contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;