import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [inputValue, setInputvalue] = useState("");
  const [todos, setTodos] = useState([]);

  const hanleInput = (e) => {
    setInputvalue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputvalue("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>

      <div className="todo-input-wrapper">
        <input
          type="text"
          placeholder="Add New Todo"
          onChange={hanleInput}
          value={inputValue}
          className="todo-input"
        />
        <button onClick={handleAdd} className="todo-btn">
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="no-task">There are no tasks. Add new tasks!</p>
      )}

      <p className="task-count">
        Total tasks: <strong>{todos.length}</strong>
      </p>
    </div>
  );
}

export default Todo;
