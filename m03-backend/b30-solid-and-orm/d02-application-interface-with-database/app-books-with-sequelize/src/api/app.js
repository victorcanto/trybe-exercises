const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('../controllers/booksController');

const app = express();

app.use(bodyParser.json());

app.get('/books', booksController.getAllBooks);
app.get('/books/:id', booksController.getBookById);
app.post('/book', booksController.createBook);
app.post('/book/:id', booksController.editBookById);
app.post('/book/:id', booksController.deleteBookById);

module.exports = app;
