import React, { useState } from 'react'
import SearchBody from '../components/searchBody/SearchBody'
import API from '../utils/API'


function Search() {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const searchInput = (event) => {
        // console.log(event.target.value)
        setSearch(event.target.value)
    }
    const searchTitle = (event) => {
        event.preventDefault()
        console.log(search)
        API.getSearch(search)
            .then(res => {
                console.log(res)
                setBooks(res.data.items)
            })
    }
    return (
        <div>
            <SearchBody books={books} searchInput={searchInput} searchTitle={searchTitle} />
        </div>
    )
}

export default Search
