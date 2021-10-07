// index.js

const express = require('express');

const Author = require('./models/Author');

const app = express();

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const PORT = process.env.PORT || 3001;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(HTTP_OK_STATUS).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Not found' });
  }

  res.status(HTTP_OK_STATUS).json(author);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Author.findBookById(id);

  if (!book) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Not found' });
  }

  res.status(HTTP_OK_STATUS).json(book);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
