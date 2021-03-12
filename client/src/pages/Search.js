import React, { useState } from 'react'
import SearchBody from '../components/searchBody/SearchBody'
import API from '../utils/API'


function Search() {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const searchInput = (event) => {
        setSearch(event.target.value)
    }
    const searchTitle = (event) => {
        event.preventDefault()
        API.getSearch(search)
            .then(res => setBooks(res.items))
    }
    return (
        <div>
            <SearchBody books={books} searchInput={searchInput} searchTitle={searchTitle} />
        </div>
    )
}

export default Search
