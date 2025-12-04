// src/pages/Home.js
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Home() {
  const { user } = useAuth();

  return (
    <div
      style={{ textAlign: "center", padding: "50px", fontFamily: "Kalpurush" }}
    >
      <h1 style={{ fontSize: "48px", color: "#4a00e0" }}>
        স্বাগতম আমার ওয়েবসাইটে!
      </h1>
      <p style={{ fontSize: "24px" }}>
        React Router + Context API দিয়ে বানানো
      </p>

      {user ? (
        <div>
          <h2>হ্যালো, {user.name}!</h2>
          <Link to="/dashboard">
            <button style={btnStyle}>ড্যাশবোর্ড</button>
          </Link>
          <Link to="/tasks" style={{ marginLeft: "20px" }}>
            <button style={btnStyle}>ট্যাস্কস</button>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <button style={btnStyle}>লগইন করো</button>
        </Link>
      )}
    </div>
  );
}

const btnStyle = {
  padding: "15px 40px",
  fontSize: "20px",
  background: "#ff4757",
  color: "white",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  marginTop: "20px",
};

export default Home;
