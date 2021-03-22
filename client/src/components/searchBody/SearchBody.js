import React, { useState } from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import API from '../../utils/API'
import ViewButton from '../ViewButton'
import swal from 'sweetalert';

function SearchBody({ books }) {
    const [bookObj, setBookObj] = useState({
        title: '',
        authors: [],
        description: '',
        image: '',
        link: ''
    })

    const saveBook = async (book) => {
        console.log(book)
        let img;
        if (book.volumeInfo.imageLinks === undefined) {
            img = 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'
        } else {
            img = `${book.volumeInfo.imageLinks.thumbnail}`
        }

        setBookObj({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: img,
            link: book.volumeInfo.previewLink
        })

        await API.saveBook(bookObj)
            .then((data) => {
                swal({
                    title: "Book Saved!",
                    text: "You have successfully saved the book!",
                    icon: "success",
                });
            })
            .catch(err => console.log(err))
    }
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
                                                    <Row>
                                                        <ViewButton bookLink={book.volumeInfo.previewLink} />
                                                        <Button
                                                            onClick={() => {
                                                                saveBook(book)
                                                            }}
                                                            className='m-1'>Save</Button>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Card.Subtitle className='mt-2'>{book.volumeInfo.authors}</Card.Subtitle>
                                            <Row>
                                                <Col className='my-2'>
                                                    <Card.Img
                                                        src={
                                                            book.volumeInfo.imageLinks === undefined
                                                                ? 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'
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
