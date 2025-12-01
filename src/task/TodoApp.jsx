import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    // console.log("todo added");
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleTodoInput = (e) => {
    // console.log("todo input");
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Add todo "
        onChange={handleTodoInput}
        style={{
          border: "none 2px solid #2196f3",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#e3f2fd",
          borderWidth: "2px",
          borderColor: "#2196f3",
        }}
        value={inputValue}
      />

      <button
        onClick={handleTodo}
        style={{
          border: "none",
          padding: "20px",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
        }}
      >
        ADD TODO
      </button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
