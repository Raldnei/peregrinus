const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlk2002.',
    database: 'testecrud2'
  });

  module.exports = db