import { Link } from 'react-router-dom'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <>
      <Navbar className="navbar" bg="light" variant="light">
        <Navbar.Brand href="/home">Music House</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            {' '}
            <Link to="/profile"> Profile</Link>
          </Nav.Link>
          <Nav.Link>
            {' '}
            <Link to="/signup"> Signup</Link>
          </Nav.Link>
          <Nav.Link>
            {' '}
            <Link to="/login"> Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}
