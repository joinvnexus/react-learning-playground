// src/components/Dashboard.js
import { useAuth } from '../context/AuthContext';
import Header from './Header';

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", fontSize: "28px" }}>
        লগইন করো প্রথমে!
      </div>
    );
  }

  return (
    <div style={{ marginTop: "100px", padding: "40px", textAlign: "center" }}>
      <Header />
      <h1 style={{ color: "#4a00e0", marginTop: "80px" }}>
        ড্যাশবোর্ডে স্বাগতম, {user.name}!
      </h1>
      <p>তুমি এখন লগইন করা আছো। এখানে যা খুশি দেখাতে পারো!</p>
      <div style={{ marginTop: "50px" }}>
        <img src="https://i.ibb.co.com/9bY7Y7v/welcome.gif" alt="Welcome" />
      </div>
    </div>
  );
}

export default Dashboard;