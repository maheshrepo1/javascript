import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Loginheader = () => {
    return (
          <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
          <Navbar.Brand><span style={{color:"red"}}> LOGO </span></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="loginp">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="product">
            <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Loginheader
