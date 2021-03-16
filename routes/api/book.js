const router = require('express').Router();
const bookControllers = require('../../controllers/bookControllers');

router.route('/')
    .post(bookControllers.saveBook)
    .get(bookControllers.getBooks)

module.exports = router