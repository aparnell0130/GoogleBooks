import React from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import ViewButton from '../ViewButton'

function SearchBody({ books }) {
    return (
        <div>
            <Container>
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
                                                    <ViewButton bookLink={book.volumeInfo.previewLink} />
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
