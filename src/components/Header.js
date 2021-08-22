import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <>
        <Navbar className="navbar" bg="light" variant="light">
          
          <Navbar.Brand href="/home">Music House</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/profile">My Profile</Nav.Link> 
          </Nav>
        </Navbar>
      </>
    )}