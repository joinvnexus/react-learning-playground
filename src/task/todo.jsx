import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputvalue] = useState("");
  const [todos, setTodos] = useState([]);

  const hanleInput = (e) => {
    setInputvalue(e.target.value);
  };
  const handleAdd = () => {
    if (inputValue.trim() === "") {
      return;
    } // trim() removes spaces
    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputvalue("");
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "20px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
        fontFamily: "Kalpurush",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "36px" }}> Todo list </h1>

      <input
        type="text"
        placeholder="Add New Todo"
        onChange={hanleInput}
        value={inputValue}
        style={{
          flex: 1,
          padding: "15px",
          fontSize: "18px",
          border: "none",
          borderRadius: "10px",
          outline: "none",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "15px 30px",
          background: "#ff4757",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add Todo
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              background: "rgba(255,255,255,0.2)",
              margin: "10px 0",
              padding: "15px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <span style={{ fontSize: "20px" }}> {todo.text}</span>
            <button
              onClick={ () => handleDelete(todo.id)}
              style={{
                padding: "10px 20px",
                background: "#ff4757",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p style={{ fontSize: "22px", opacity: 0.8 }}>
          There are no tasks. Add new tasks!
        </p>
      )}

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Total tasks: <strong>{todos.length}</strong>
      </p>
    </div>
  );
}

export default Todo;
