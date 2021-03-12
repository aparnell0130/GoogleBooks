import axios from 'axios'

const API = {
    getSearch: (search) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`)
    }
}

export default API