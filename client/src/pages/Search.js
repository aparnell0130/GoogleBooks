import React, { useState } from 'react'
import SearchBar from '../components/searchBody/SearchBar'
import SearchBody from '../components/searchBody/SearchBody'
import API from '../utils/API'


function Search() {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const [bookObj, setBookObj] = useState({
        title: '',
        authors: [],
        description: '',
        image: '',
        link: ''
    })

    const searchInput = (event) => {
        // console.log(event.target.value)
        setSearch(event.target.value)
    }
    const searchTitle = (event) => {
        event.preventDefault()
        console.log(search)
        API.getSearch(search)
            .then(res => {
                console.log(res.data.items)
                setBooks(res.data.items)
            })
    }
    const saveBook = event => {
        event.preventDefault()
        API.saveBook(bookObj)
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <SearchBar
                searchInput={searchInput}
                searchTitle={searchTitle}
            />
            <SearchBody
                books={books}
                setBookObj={setBookObj}
                saveBook={saveBook}
            />

        </div>
    )
}

export default Search
