const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.101.228.123',
  user: 'root',
  database: 'sorak_db',
  password: '1234'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }

  console.log('Connected to MySQL database');
});

module.exports = connection;