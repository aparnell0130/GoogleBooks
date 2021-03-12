import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'

function SearchBody() {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Header as='h5'>Book Search</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBookSearch">
                                <Form.Label>Book</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Header as='h5'>Results</Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default SearchBody
