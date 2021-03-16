const db = require('../models')
const { findById } = require('../models/books')

module.exports = {
  saveBook: (req, res) => {
    db.Book
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },
  getBooks: (req, res) => {
    db.Book
      .find()
      .then((data) => { res.json(data) })
      .catch(err => res.status(422).json(err))
  },
  deleteBook: (req, res) => {
    const id = req.body.id
    db.Book
    findById({ _id: id })
      .then(data => {
        data.remove();
        res.json(data)
      })
      .catch(err => res.status(422).json(err))
  }
}