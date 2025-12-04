// src/components/ComplexCounter.js
import { useReducer } from "react";

// Action Types (Const)
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DOUBLE = "DOUBLE";
const HALF = "HALF";
const RESET = "RESET";

// Initial State
const initialState = {
  count: 0,
  history: [],  // Action History
  isNegative: false,
};

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, "+1"],
        isNegative: (state.count + 1) < 0,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        history: [...state.history, "-1"],
        isNegative: (state.count - 1) < 0,
      };
    case DOUBLE:
      return {
        ...state,
        count: state.count * 2,
        history: [...state.history, "×2"],
      };
    case HALF:
      return {
        ...state,
        count: Math.round(state.count / 2),
        history: [...state.history, "÷2"],
      };
    case RESET:
      return {
        ...initialState,
        history: ["Reset"],
      };
    default:
      return state;
  }
}

// Component
function ComplexCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handler Functions
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const double = () => dispatch({ type: DOUBLE });
  const half = () => dispatch({ type: HALF });
  const reset = () => dispatch({ type: RESET });

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>useReducer কাউন্টার</h1>
      <h2 style={{ ...countStyle, color: state.isNegative ? "#e74c3c" : "#2e7d32" }}>
        {state.count}
      </h2>

      <div style={buttonContainerStyle}>
        <button onClick={increment} style={buttonStyle}>+১</button>
        <button onClick={decrement} style={buttonStyle}>-১</button>
        <button onClick={double} style={buttonStyle}>×২</button>
        <button onClick={half} style={buttonStyle}>÷২</button>
        <button onClick={reset} style={dangerButtonStyle}>রিসেট</button>
      </div>

      <div>
        <h3>হিস্ট্রি:</h3>
        <div style={historyStyle}>
          {state.history.length === 0 ? "কোনো অ্যাকশন নেই" : state.history.join(" → ")}
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: "40px",
  textAlign: "center",
  fontFamily: "Kalpurush",
  background: "#f8f9fa",
  borderRadius: "20px",
  margin: "50px auto",
  maxWidth: "600px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const headerStyle = {
  color: "#4a00e0",
};

const countStyle = {
  fontSize: "72px",
  margin: "30px 0",
};

const buttonContainerStyle = {
  margin: "30px 0",
};

const buttonStyle = {
  padding: "12px 25px",
  margin: "8px",
  fontSize: "20px",
  background: "#4a00e0",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const dangerButtonStyle = {
  ...buttonStyle,
  background: "#e74c3c",
};

const historyStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  minHeight: "60px",
};

// Exporting the component
export default ComplexCounter;
