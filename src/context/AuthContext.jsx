// src/context/AuthContext.js
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = লগইন নেই

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    alert("লগআউট সফল!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// কাস্টম হুক – যেকোনো কম্পোনেন্ট থেকে ইউজার নেওয়ার জন্য
export const useAuth = () => useContext(AuthContext);