// src/context/AuthContext.js
import { createContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

 function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = লগইন নেই

  const login = (userData) => {
    try {
      if (!userData.name && userData.email) {
        const nameFromEmail = userData.email.split("@")[0];
        setUser({ ...userData, name: nameFromEmail });
      } else {
        setUser(userData);
      }
    } catch (error) {
      console.error("Error in login function:", error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      alert("লগআউট সফল!");
    } catch (error) {
      console.error("Error in logout function:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

