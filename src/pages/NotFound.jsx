// src/pages/NotFound.js
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px", fontFamily: "Kalpurush" }}>
      <h1 style={{ fontSize: "100px", color: "#e74c3c" }}>404</h1>
      <h2>পেইজ পাওয়া যায়নি!</h2>
      <Link to="/">
        <button style={{ padding: "15px 40px", fontSize: "20px", background: "#4a00e0", color: "white", border: "none", borderRadius: "15px" }}>
          হোমে ফিরে যাও
        </button>
      </Link>
    </div>
  );
}

export default NotFound;