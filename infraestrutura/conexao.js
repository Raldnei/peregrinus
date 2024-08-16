const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DIGITARSENHA',
    database: 'NOMEDATABASE'
  });

  module.exports = db