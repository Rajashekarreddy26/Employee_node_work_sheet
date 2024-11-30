const mysql = require('mysql2');

const db = mysql.createConnection({
    'host' : 'sql309.infinityfree.com',
    'port' : '3306',
    'database' : 'if0_37820933_work_sheet',
    'user' : 'if0_37820933',
    'password' : "z4hnsrYxcvK",
});

db.connect(error => {
    if (error) {
        console.error('Database connection failed: ', error.stack);
        return;
      }
      console.log('Connected to database as id ' + db.threadId);
});

module.exports = db;
