
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Google Books</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className='nav-link' to="/">Search</Link>
                    <Link className='nav-link' to="/saved">Saved</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
