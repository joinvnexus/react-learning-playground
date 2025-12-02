// src/pages/Dashboard.js
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div style={{ padding: "40px", fontFamily: "Kalpurush" }}>
      <h1 style={{ textAlign: "center", color: "#4a00e0" }}>
        ড্যাশবোর্ড – স্বাগতম, {user.name}!
      </h1>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/profile">
          <button style={btn}>প্রোফাইল দেখো</button>
        </Link>
      </div>

      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h2>এখানে তোমার ডেটা দেখাতে পারো</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "30px" }}>
          <div style={card}>মোট টোডো: ১২</div>
          <div style={card}>আজকের কাজ: ৫</div>
          <div style={card}>পয়েন্ট: ৯৮০</div>
        </div>
      </div>
    </div>
  );
}

const btn = {
  padding: "15px 40px",
  background: "#4a00e0",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  fontSize: "20px",
  fontWeight: "bold"
};

export default Dashboard;