import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import API from '../../utils/API'

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
                <Card>
                    <Card.Header as='h5'>Saved Books</Card.Header>
                    {savedBooks.map(book => (
                        <Card.Body key={book._id}>
                            {book.title}
                        </Card.Body>
                    ))}

                </Card>
            </Container>
        </div>
    )
}

export default SavedBody
