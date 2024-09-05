const db = require('../config/db');

// Modelo para tarefas
const Todo = {
    getAll: (callback) => {
        const query = 'SELECT * FROM todos';
        db.query(query, (err, result) => {
            if (err) return callback(err);
            callback(null, result.rows);
        });
    },

    getById: (id, callback) => {
        const query = 'SELECT * FROM todos WHERE id = $1';
        db.query(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result.rows);
        });
    },

    create: (title, callback) => {
        const query = 'INSERT INTO todos (title) VALUES ($1) RETURNING id';
        db.query(query, [title], (err, result) => {
            if (err) return callback(err);
            callback(null, { insertId: result.rows[0].id });
        });
    },

    update: (id, title, completed, callback) => {
        const query = 'UPDATE todos SET title = $1, completed = $2 WHERE id = $3';
        db.query(query, [title, completed, id], (err, result) => {
            if (err) return callback(err);
            callback(null, { affectedRows: result.rowCount });
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM todos WHERE id = $1';
        db.query(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, { affectedRows: result.rowCount });
        });
    }
};

module.exports = Todo;
