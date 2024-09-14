const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'aluno',
    password: 'ifpecjbg',
    database: 'peregrinus'
  });

  module.exports = db