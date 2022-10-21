const mysql = require('mysql');
const db = mysql.createConnection({
     host: 'localhost', 
     user:'muffina', 
     password: 'admin123',
     database:"konkurs" 
});

module.exports = db;