import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
    return (
          <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="pccrud">
            <Nav.Link>Product CRUD</Nav.Link>
            </LinkContainer>

            <LinkContainer to="product">
            <Nav.Link>Product</Nav.Link>
            </LinkContainer>
          
            <LinkContainer to="plist">
            <Nav.Link>Product List</Nav.Link>
            </LinkContainer>

            <LinkContainer to="ulist">
            <Nav.Link>User List</Nav.Link>
            </LinkContainer>

            <LinkContainer to="partlist">
            <Nav.Link>Part List</Nav.Link>
            </LinkContainer>

            <LinkContainer to="postlist">
            <Nav.Link>Post List</Nav.Link>
            </LinkContainer>

            <LinkContainer to="chkall">
            <Nav.Link>Chkall List</Nav.Link>
            </LinkContainer>

            <LinkContainer to="addmore">
            <Nav.Link>Add More...</Nav.Link>
            </LinkContainer>

            <LinkContainer to="addproduct">
            <Nav.Link>Product List...</Nav.Link>
            </LinkContainer>

            <LinkContainer to="callthree">
            <Nav.Link>Call Three ..</Nav.Link>
            </LinkContainer>

            <LinkContainer to="usecont">
            <Nav.Link>Usecontext ..</Nav.Link>
            </LinkContainer>

            <LinkContainer to="hoc">
            <Nav.Link>HOC ..</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default header
