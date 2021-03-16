import axios from 'axios'

const API = {
    getSearch: (search) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`)
    },
    saveBook: (data) => {
        return axios.post('/api/books', data)
    },
    getBooks: () => {
        return axios.get('/api/books')
    },
    deleteBook: (id) => {
        return axios.delete('/api/books/' + id)
    }
}

export default API