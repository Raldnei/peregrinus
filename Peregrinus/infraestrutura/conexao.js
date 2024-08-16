const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '34818520',
    database: 'new'
  });

  module.exports = db