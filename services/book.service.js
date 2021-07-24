const {
  filter
} = require('lodash');

const books = require('../data/books');

const getBook = bookId => books.find(book => book.id == bookId);

const listBooks = async (query) => {
  const filterObj = {};
  if (query) {
    if (Number.isInteger(+query.year)) {
      filterObj.year = +query.year;
    }
  }
  return filter(books, filterObj);
};

module.exports = {
  getBook,
  listBooks,
};
