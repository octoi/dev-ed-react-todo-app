import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <Header />
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
            <TodoList inputText={inputText} todos={todos} />
        </div>
    );
}

export default App;
