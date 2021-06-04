import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [inputText, setInputText] = useState('');

    return (
        <div className="App">
            <Header />
            <Form setInputText={setInputText} />
            <TodoList inputText={inputText} />
        </div>
    );
}

export default App;
