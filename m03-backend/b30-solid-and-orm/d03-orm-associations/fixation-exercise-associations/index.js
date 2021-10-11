const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const { Address, Employee, Book, User } = require('./models');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (transaction) => {
      const employee = await Employee.create(
        {
          firstName,
          lastName,
          age,
        },
        { transaction }
      );

      await Address.create(
        {
          city,
          street,
          number,
          employeeId: employee.id,
        },
        { transaction }
      );

      return res
        .status(201)
        .json({ id: employee.id, message: 'Cadastrado com sucesso' });
    });

    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddress === 'true') {
      const address = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, address });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
