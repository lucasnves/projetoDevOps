import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { api } from '../api';

const TodoForm = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        axios.post(`${api}/api/todos`, { title })
            .then(() => {
                setTitle('');
                window.location.reload(); // Idealmente, você deve atualizar a lista de tarefas sem recarregar a página.
            })
            .catch(error => {
                console.error('Erro ao criar tarefa:', error);
            });
    }, [title]);

    const handleClear = () => {
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nova tarefa"
                required
                className="input"
            />
            <div className="button-group">
                <button type="submit" className="submit-button">Adicionar</button>
                <button type="button" onClick={handleClear} className="clear-button">Limpar</button>
            </div>
        </form>
    );
};

export default TodoForm;