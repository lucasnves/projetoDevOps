const express = require('express');
const todosController = require('../controllers/todosController');

const router = express.Router();

// Definir as rotas e associar aos métodos do controlador
router.get('/todos', todosController.getTodos);
router.get('/todos/:id', todosController.getTodoById);
router.post('/todos', todosController.createTodo);
router.put('/todos/:id', todosController.updateTodo);
router.delete('/todos/:id', todosController.deleteTodo);

module.exports = router;
