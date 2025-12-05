// src/AuthForm.js
import { useState } from "react";
import "./AuthForm.css";
import { useAuth } from "../hooks/useAuth";
const AuthForm = () => {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (!e.target) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // রিয়েল টাইমে এরর মুছে ফেলা
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let temp = {};

    if (!isLogin && !formData.name.trim())
      temp.name = "You must write the name.";

    if (!formData.email.includes("@") || !formData.email.includes("."))
      temp.email = "Please enter the correct email.";

    if (formData.password.length < 6)
      temp.password = "Password must be at least 6 characters long.";

    if (!isLogin && formData.password !== formData.confirmPassword)
      temp.confirmPassword = "Password does not match!";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      
      if (validate()) {
        if (isLogin) {
          login({ name: formData.name, email: formData.email });
          alert("Login successful! Welcome to the dashboard");
          console.log("Login:", { name: formData.name, email: formData.email });
        } else {
          alert(`Welcome ${formData.name}! Account created`);
          console.log("Registered:", formData);
        }

        // ফর্ম খালি করা
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{isLogin ? "Login" : "Register"}</h1>

        <form onSubmit={handleSubmit}>
          {/* শুধু রেলিস্টারে নাম */}
          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email (example@gmail.com)"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password (6+ characters)"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          {/* শুধু রেলিস্টারে নাম */}
          {!isLogin && (
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Retype password."
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
