import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    if (inputValue.trim() === "") return; // prevent empty todo
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const handleTodoInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Add todo..."
        onChange={handleTodoInput}
        value={inputValue}
        style={{
          padding: "15px",
          borderRadius: "10px",
          border: "2px solid #2196f3",
          backgroundColor: "#e3f2fd",
          width: "70%",
          marginRight: "10px",
          fontSize: "18px",
        }}
      />

      <button
        onClick={handleTodo}
        style={{
          padding: "15px 25px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      >
        ADD TODO
      </button>

      <ul style={{ marginTop: "20px", fontSize: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
