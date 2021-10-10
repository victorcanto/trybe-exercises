const { Book } = require('../models');
const { StatusCodes } = require('http-status-codes');

const errorMessage = { message: 'Algo deu errado' };
const logError = (message) => new Error(message);

const getAllBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(StatusCodes.OK).json(books);
  } catch (err) {
    logError(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Livro não encontrado' });
    }

    return res.status(StatusCodes.OK).json(book);
  } catch (err) {
    logError(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(StatusCodes.CREATED).json(newBook);
  } catch (err) {
    logError(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

const editBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const editedBook = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    if (!editedBook) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Livro não encontrado' });
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Livro editado com sucesso', editedBook });
  } catch (err) {
    logError(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

const deleteBookById = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.destroy({ where: { id } });

  if (!deletedBook) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Livro não encontrado' });
  }

  return res
    .status(StatusCodes.OK)
    .json({ message: 'Livro deletado com sucesso', deletedBook });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  editBookById,
  deleteBookById,
};
