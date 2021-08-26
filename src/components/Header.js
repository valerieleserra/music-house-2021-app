import React  from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Signup from './Signup'
import Login from './Login'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <Navbar className="navbar">
        <Navbar.Brand href="/home">ELIXAIR STUDIOS</Navbar.Brand>
        <Nav className="navbar-links">
          <Nav.Link as={Link} to="/memberprofile">
            My Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/clients">
            Clients
          </Nav.Link>
        </Nav>
        <Login />
        <Signup />
      </Navbar>
      </>
  )
}



