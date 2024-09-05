import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import { api } from '../api';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const refreshTodos = async () => {
        try {
            const response = await axios.get(`${api}/api/todos`);
            setTodos(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            setTodos([]); // Limpa a lista em caso de erro
        }
    };

    useEffect(() => {
        refreshTodos();
    }, []);

    return (
        <ul className="todo-list">
            {todos.length > 0 ? (
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
                ))
            ) : (
                <p>Não há tarefas disponíveis.</p>
            )}
        </ul>
    );
};

export default TodoList;