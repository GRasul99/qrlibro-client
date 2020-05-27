import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://libro.pythonanywhere.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getCategories() {
    return apiService.get('/category')
  },
  getCategory(id) {
    return apiService.get('/category/' + id)
  },
  getBooks() {
    return apiService.get('/books')
  },
  getBook(id) {
    return apiService.get('/books/' + id)
  }
}