const Todo = require('../models/todo');

// Controlador para gerenciar as tarefas
const todosController = {
    // Listar todas as tarefas
    getTodos: (req, res) => {
        Todo.getAll((err, results) => {
            if (err) {
                return res.status(500).send('Erro ao buscar as tarefas');
            }
            res.json(results);
        });
    },

    // Buscar uma tarefa por ID
    getTodoById: (req, res) => {
        const id = req.params.id;
        Todo.getById(id, (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao buscar a tarefa');
            }
            if (results.length === 0) {
                return res.status(404).send('Tarefa não encontrada');
            }
            res.json(results[0]);
        });
    },

    // Criar uma nova tarefa
    createTodo: (req, res) => {
        const { title } = req.body;
        if (!title) {
            return res.status(400).send('O título é obrigatório');
        }
        Todo.create(title, (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao criar a tarefa');
            }
            res.status(201).json({ id: results.insertId, title, completed: false });
        });
    },

    // Atualizar uma tarefa
    updateTodo: (req, res) => {
        const id = req.params.id;
        const { title, completed } = req.body;
        Todo.update(id, title, completed, (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao atualizar a tarefa');
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Tarefa não encontrada');
            }
            res.json({ id, title, completed });
        });
    },

    // Deletar uma tarefa
    deleteTodo: (req, res) => {
        const id = req.params.id;
        Todo.delete(id, (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao deletar a tarefa');
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Tarefa não encontrada');
            }
            res.status(204).send();
        });
    }
};

module.exports = todosController;
