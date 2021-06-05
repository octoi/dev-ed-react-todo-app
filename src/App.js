import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [canFetch, setCanFetch] = useState(true);

    useEffect(() => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed));
                break
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break
            default:
                setFilteredTodos(todos);
                break
        }

        if (!canFetch) localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos, status, canFetch])

    useEffect(() => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoFromLocal = localStorage.getItem("todos");
            setCanFetch(false);
            setTodos(JSON.parse(todoFromLocal));
        }
    }, [])

    return (
        <div className="App">
            <Header />
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
            <TodoList inputText={inputText} todos={filteredTodos} setTodos={setTodos} />
        </div>
    );
}

export default App;
