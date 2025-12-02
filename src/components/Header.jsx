// src/components/Header.js
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  if (!user) return null; // লগইন না থাকলে কিছু দেখাবে না

  return (
    <div style={{
      background: "#4a00e0",
      color: "white",
      padding: "20px",
      textAlign: "center",
      fontSize: "24px",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    }}>
      <span>স্বাগতম, <strong>{user.name}</strong>!</span>
      <button
        onClick={logout}
        style={{
          marginLeft: "30px",
          padding: "10px 25px",
          background: "#ff4757",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        লগআউট
      </button>
    </div>
  );
}

export default Header;