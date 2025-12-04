// src/pages/Login.js
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import AuthForm from "../task/AuthForm";

function Login() {
  const { user } = useAuth();

  // যদি ইতিমধ্যে লগইন করা থাকে → সরাসরি হোমে পাঠাও
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div >
      <AuthForm />
    </div>
  );
}

export default Login;