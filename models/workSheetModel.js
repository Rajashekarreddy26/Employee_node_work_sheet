const db = require('../config/db');

const Sheet = {
    create : (data , callback) => {
        const query = `INSERT INTO work_sheet (date, project, task, description, hours, minutes, edit_status, status, edited, created_at, created_by) 
            VALUES (DATE_FORMAT(STR_TO_DATE(?, '%d-%m-%Y'), '%Y-%m-%d'), ?, ?, ?, ?, ?, 0, 1, 0, DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s'), ?);`;
        db.query(query, [data.date, data.project, data.task, data.description, data.hours, data.minutes, data.created_by], callback);

    },

    findAll : () => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM work_sheet WHERE status = 1"; // Replace 'sheets' with your table name
            db.query(query, (err, results) => {
              if (err) {
                reject(err);  // Reject the Promise if there is an error
              } else {
                resolve(results);  // Resolve the Promise with the results
              }
            });
         });
    },

    findById : (id, callback) => {
        const query = "SELECT * FROM work_sheet WHERE id = ?";
        db.query(query, [id], callback);
    },

    update : (id, data, callback) => {
        const query = "UPDATE work_sheet SET date = ?, project = ?, task = ?, description = ?, hours = ?, minutes = ?, edited = ?, updated_at = ?, updated_by = ?";
        db.query(query, [DATE_FORMAT(data.date, '%Y-%m-%d'), data.project, data.task, data.description, data.hours, data.minutes, 1, DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s'), data.updated_by], callback);
    },

    delete : (id, callback) => {
        const query = 'UPDATE work_sheet SET status = 0 WHERE id = ?';
        db.query(query,[id], callback);
    }
};

module.exports = Sheet;