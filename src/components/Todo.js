import React, { useRef } from 'react';

export default function Todo({ todo, setTodos, todos }) {
    const todoRef = useRef();

    const deleteHandler = () => {
        todoRef.current.classList.add('fall');
        setTimeout(() => {
            setTodos(todos.filter(el => el.id !== todo.id));
        }, 1000)
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }));
    }

    return (
        <div className="todo" ref={todoRef}>
            <li className={`todo-item ${todo.completed && 'completed'}`}>{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
