import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Signup from './Signup'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expands="small" className="navbar">
        <Container>
          <Navbar.Collapse>
            <Navbar.Brand href="/home">ELIXAIR STUDIOS</Navbar.Brand>
            <Nav className="navbar-links">
              <Nav.Link as={Link} to="/memberprofile">
                My Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>
            </Nav>
            <Login />
            <Signup />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
