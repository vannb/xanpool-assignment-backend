const bookSv = require('../services/book.service');

const getBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const result = await bookSv.getBook(bookId);
    if(!result) {
      return res.status(404).send('Book not found');
    }
    res.send(result);
  } catch (e) {
    res.status(500).send('Server unexpected error');
  }
};

const listBooks = async (req, res) => {
  try {
    const { query } = req;
    const result = await bookSv.listBooks(query);
    res.send(result);
  } catch (e) {
    res.status(500).send('Server unexpected error');
  }
};

exports.listBooks = listBooks;
exports.getBook = getBook;
