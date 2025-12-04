// src/components/FormReducer.js
import React from "react";
import { useReducer } from "react";
import "./FormReducer.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {}, // all errors stored here
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.payload,
        errors: { ...state.errors, [action.field]: "" }, // clear error when typing
      };

    case "VALIDATE": {
      const newErrors = {};

      // Email check
      if (!state.email || !state.email.includes("@")) {
        newErrors.email = "Please enter a valid email (e.g., abc@gmail.com)";
      }

      // Password length
      if (state.password && state.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long";
      }

      // Confirm password match
      if (state.confirmPassword && state.password !== state.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match!";
      }

      return { ...state, errors: newErrors };
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation before submit
    dispatch({ type: "VALIDATE" });

    // If there are no errors
    if (
      Object.keys(state.errors).length === 0 &&
      state.email &&
      state.password
    ) {
      console.log("All good! Data:", state);
      alert("Registration successful!");
      dispatch({ type: "RESET" });
    } else {
      alert("Please correct the errors before submitting");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form (with Validation)</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="form-input"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <input
            type="text" // type="email" is also fine, but we are validating manually
            placeholder="Email (abc@gmail.com)"
            className={`form-input ${state.errors.email ? "error-input" : ""}`}
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                payload: e.target.value,
              })
            }
          />
          {state.errors.email && (
            <span className="error-text">{state.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password (6+ characters)"
            className={`form-input ${
              state.errors.password ? "error-input" : ""
            }`}
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "password",
                payload: e.target.value,
              })
            }
          />
          {state.errors.password && (
            <span className="error-text">{state.errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className={`form-input ${
              state.errors.confirmPassword ? "error-input" : ""
            }`}
            value={state.confirmPassword}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "confirmPassword",
                payload: e.target.value,
              })
            }
          />
          {state.errors.confirmPassword && (
            <span className="error-text">{state.errors.confirmPassword}</span>
          )}
        </div>

        <div className="btn-group">
          <button type="submit" className="submit-btn">
            Register
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
            className="reset-btn"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="data-preview">
        <pre className="data-json">{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default FormReducer;
