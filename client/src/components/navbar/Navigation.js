
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Google Books</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" >Search</Nav.Link>
                    <Nav.Link as={Link} to="/saved" >Saved</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
