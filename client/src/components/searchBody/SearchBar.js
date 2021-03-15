import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

function SearchBar({ searchTitle, searchInput }) {
    return (
        <Container>
            <Card>
                <Card.Header as='h5'>Book Search</Card.Header>
                <Card.Body>
                    <Form >
                        <Form.Group controlId="formBookSearch">
                            <Form.Label>Book</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book" onChange={searchInput} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={searchTitle}>
                            Submit
                            </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchBar
