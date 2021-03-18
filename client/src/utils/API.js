import axios from 'axios'

const API = {
    getSearch: async (search) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`)
    },
    saveBook: async (data) => {
        return axios.post('/api/books', data)
    },
    getBooks: async () => {
        return axios.get('/api/books')
    },
    deleteBook: async (id) => {
        return axios.delete('/api/books/' + id)
    }
}

export default API