const db = require('../models')


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
    db.Book
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  }
}