const mysql = require('mysql2/promise');

exports.connection = mysql.createPool({
  host: 'localhost',
  user: 'victorcanto',
  password: 'userDB1+1',
  database: 'model_example',
});
