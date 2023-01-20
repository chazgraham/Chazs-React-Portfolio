import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {

  return (
    <>
      <Navbar variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <h1>Chaz Graham</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;