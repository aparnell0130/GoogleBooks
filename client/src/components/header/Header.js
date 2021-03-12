import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Container>
                <Jumbotron className='text-center'>
                    <h1>Google Books Search and Save</h1>
                    <p>
                        Search and Save All Books That Interest You!
                    </p>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default Header
