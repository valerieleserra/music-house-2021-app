import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {
    return (
        <>
        <Navbar className="navbar" bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Music House</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#profile">My Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )}