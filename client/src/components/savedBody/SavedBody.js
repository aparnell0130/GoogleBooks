import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import API from '../../utils/API'
import ViewButton from '../ViewButton'

function SavedBody() {
    const [savedBooks, setSavedBooks] = useState([])
    useEffect(() => {
        API.getBooks()
            .then((data) => {
                setSavedBooks(data.data)
                console.log(data)
            })
    }, [setSavedBooks])

    return (
        <div>
            <Container>
                <Card className='mt-4'>
                    {savedBooks.length ? (
                        <div>
                            <Card.Header as='h5'>Results</Card.Header>
                            {savedBooks.map(book => (
                                <Card.Body key={book._id}>
                                    <Card>
                                        <Card.Body>
                                            <Row >
                                                <Col md={6}>
                                                    <Card.Title >
                                                        {book.title}
                                                    </Card.Title>
                                                </Col>
                                                <Col md={{ span: 2, offset: 4 }}>
                                                    <Row>
                                                        <ViewButton bookLink={book.link} />
                                                        <Button
                                                            onClick={e => {

                                                            }}
                                                            className='m-1'>Delete</Button>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Card.Subtitle className='mt-2'>{book.authors}</Card.Subtitle>
                                            <Row>
                                                <Col className='my-2'>
                                                    <Card.Img
                                                        src={book.image}
                                                        style={{ width: '200px', height: '250px' }}
                                                    />
                                                </Col>
                                                <Col md={9}>
                                                    <Card.Text>
                                                        {book.description}
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
        </div>
    )
}

export default SavedBody
