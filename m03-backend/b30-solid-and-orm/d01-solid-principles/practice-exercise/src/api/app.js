const express = require('express');
const bodyParser = require('body-parser');

const plantsRouter = require('../routes/plants');

const app = express();
app.use(bodyParser.json());

app.use(plantsRouter);

module.exports = app;
