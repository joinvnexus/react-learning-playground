// src/pages/Profile.js
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Kalpurush" }}>
      <h1 style={{ color: "#4a00e0" }}>তোমার প্রোফাইল</h1>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        margin: "30px auto"
      }}>
        <img 
          src="https://i.ibb.co/6s2ZJ7k/boy1.jpg" 
          alt="Profile" 
          style={{ width: "150px", borderRadius: "50%" }}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={logout} style={btnStyle}>লগআউট করো</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "12px 30px",
  background: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "18px"
};

export default Profile;