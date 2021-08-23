import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <>
        <Navbar className="navbar" bg="light" variant="light">
          
          <Navbar.Brand to="/home">Music House</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/profile">My Profile</Nav.Link> 
            <Nav.Link to="/login">Login</Nav.Link> 
            <Nav.Link to="/signup">Sign Up</Nav.Link> 
            <Nav.Link to="/bookings">Book Now</Nav.Link> 
          </Nav>
        </Navbar>
      </>
    )}