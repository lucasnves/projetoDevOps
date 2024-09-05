const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const todosRoutes = require('./routes/todos');

const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Usar as rotas de tarefas
app.use('/api', todosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
