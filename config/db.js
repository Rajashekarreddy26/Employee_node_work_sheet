const mysql = require('mysql2');

const db = mysql.createConnection({
    'host' : 'localhost',
    'port' : '3306',
    'database' : 'node_db',
    'user' : 'root',
    'password' : "localuser123",
});

db.connect(error => {
    if (error) {
        console.error('Database connection failed: ', error.stack);
        return;
      }
      console.log('Connected to database as id ' + db.threadId);
});

module.exports = db;