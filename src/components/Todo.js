import React from 'react';

export default function Todo({ todo, setTodos, todos }) {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    return (
        <div className="todo">
            <li className="todo-item">{todo.text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
