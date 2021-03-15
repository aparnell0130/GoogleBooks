const db = require('../models')

module.exports = {
  saveBook: (req, res) => {
    db.Book
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  }
}