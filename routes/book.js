const express = require('express');

const router = express.Router();
const bookCtrl = require('../controllers/book.controller');

router.route('').get(bookCtrl.listBooks);
router.route('/:bookId').get(bookCtrl.getBook);

module.exports = router;
