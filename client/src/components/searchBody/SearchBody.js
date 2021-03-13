import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'

function SearchBody({ books, searchInput, searchTitle }) {
    return (
        <div>
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
                <Card className='mt-4'>
                    <Card.Header as='h5'>Results</Card.Header>
                    <Card.Body>
                        {books.map(book => (
                            <li>{book.volumeInfo.title}</li>
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default SearchBody
