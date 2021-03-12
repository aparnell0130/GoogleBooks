
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Google Books</Navbar.Brand>
                <Nav className="mr-auto">

                    <Nav.Link href="#home">Search</Nav.Link>
                    <Nav.Link href="#saved">Saved</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
