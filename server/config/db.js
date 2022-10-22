const mysql = require('mysql');
const db = mysql.createConnection({
     host: 'localhost', 
     user:'root', 
     password: '',
     database:"konkurs" 
});

module.exports = db;