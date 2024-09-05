import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <h1 className="header">Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    );
};

export default App;