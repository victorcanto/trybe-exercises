const { connection } = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .map((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) => {
  const { id, first_name, middle_name, last_name } = authorData;
  return {
    id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name,
  };
};

const getAll = async () => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';
  const [authors] = await connection.execute(query);
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;';
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = serialize(authorData[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const findBookById = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE id=?';
  const [bookName] = await connection.execute(query, [id]);

  return bookName[0];
};

module.exports = { getAll, findById, findBookById };
