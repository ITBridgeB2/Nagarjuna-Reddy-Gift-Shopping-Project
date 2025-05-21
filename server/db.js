const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Change your username
  password: 'Reddy@123', // Chnage your mysql password
  database: 'db'  // change your mysql database name
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
