const mysql = require('mysql');

// database configuration
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cotiza',
};

const pool = mysql.createPool(config);

module.exports = pool;