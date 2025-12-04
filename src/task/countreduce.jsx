import React from "react";

import { useReducer } from "react";

const initialState = {
  count: 0,
  history: [],
  isNagative: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, "+1"],
        isNagative: state.count + 1 < 0,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        history: [...state.history, "-1"],
        isNagative: state.count - 1 < 0,
      };
    case "RESET":
      return {
        ...initialState,
        history: ["Reset"],
      };
    default:
      return state;
  }
};

function CountReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Kalpurush",
        background: "#f8f9fa",
        borderRadius: "20px",
        margin: "50px auto",
        maxWidth: "600px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#4a00e0" }}>useReducer Counter</h1>

      <h2
        style={{
          fontSize: "72px",
          color: state.isNegative ? "#e74c3c" : "#2e7d32",
          margin: "30px 0",
        }}
      >
        {state.count}
      </h2>
      <div
        style={{
          margin: "30px 0",
        }}
      >
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
          style={{
             padding: "12px 25px",
            margin: "8px",
            fontSize: "20px",
            background: "#4a00e0",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {" "}
          INCREMENT
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREMENT",
            })
          }
          style={{
            padding: "12px 25px",
            margin: "8px",
            fontSize: "20px",
            background: "#4a00e0",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          DECREMENT
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "RESET",
            })
          }
          style={{
            background: "#e74c3c"
          }}
        >
          RESET
        </button>
        <div>
          <h3>History:</h3>
          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              minHeight: "60px",
            }}
          >
            {state.history.length === 0
              ? "No actions yet"
              : state.history.join(" → ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountReducer;
