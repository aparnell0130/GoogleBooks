import React from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'

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
                    {books.length ? (
                        <div>
                            <Card.Header as='h5'>Results</Card.Header>
                            {books.map(book => (
                                <Card.Body key={book.id}>
                                    <Card>
                                        <Card.Body>
                                            <Row >
                                                <Col md={6}>
                                                    <Card.Title >
                                                        {book.volumeInfo.title}
                                                    </Card.Title>
                                                </Col>
                                                <Col md={{ span: 2, offset: 4 }}>
                                                    <Button className='m-1'>View</Button>
                                                    <Button className='m-1'>Save</Button>
                                                </Col>
                                            </Row>
                                            <Card.Subtitle className='mt-2'>{book.volumeInfo.authors}</Card.Subtitle>
                                            <Row>
                                                <Col className='my-2'>
                                                    <Card.Img
                                                        src={
                                                            book.volumeInfo.imageLinks === undefined
                                                                ? 'https://placehold.it/300x300'
                                                                : `${book.volumeInfo.imageLinks.thumbnail}`
                                                        }
                                                        style={{ width: '200px', height: '250px' }}
                                                    />
                                                </Col>
                                                <Col md={9}>
                                                    <Card.Text>
                                                        {book.volumeInfo.description}
                                                    </Card.Text>
                                                </Col>

                                            </Row>

                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            ))}
                        </div>

                    ) : (
                        <Card.Header as='h5'>No Results</Card.Header>
                    )}

                </Card>
            </Container>
        </div >
    )
}

export default SearchBody
