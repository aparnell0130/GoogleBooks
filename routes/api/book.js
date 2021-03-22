const router = require('express').Router();
const bookControllers = require('../../controllers/bookControllers');

router.route('/')
    .get(bookControllers.getBooks)
    .post(bookControllers.saveBook)

router.route('/:id')
    .delete(bookControllers.deleteBook)

module.exports = router