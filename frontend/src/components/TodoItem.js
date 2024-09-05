import React, { useState } from 'react';
import axios from 'axios';
import { api } from '../api';

const TodoItem = ({ todo, refreshTodos }) => {
    const [completed, setCompleted] = useState(todo.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const handleDelete = async () => {
        try {
            await axios.delete(`${api}/api/todos/${todo.id}`);
            refreshTodos();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    };

    const handleToggle = async () => {
        try {
            await axios.put(`${api}/api/todos/${todo.id}`, { ...todo, completed: !completed });
            setCompleted(prev => !prev);
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
        }
    };

    const handleEdit = async () => {
        try {
            await axios.put(`${api}/api/todos/${todo.id}`, { title, completed });
            setIsEditing(false);
            refreshTodos();
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
        }
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <div className="edit-container">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-edit"
                    />
                    <div>
                        <button className="save-button" onClick={handleEdit}>Salvar</button>
                        <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancelar</button>
                    </div>
                </div>
            ) : (
                <div className="item-container">
                    <div>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={handleToggle}
                            className="checkbox"
                        />
                        <span className={completed ? 'completed' : ''}>{todo.title}</span>
                    </div>
                    <div className="button-group">
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Editar</button>
                        <button className="delete-button" onClick={handleDelete}>Deletar</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default TodoItem;