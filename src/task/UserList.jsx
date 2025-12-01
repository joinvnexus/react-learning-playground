import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        setusers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(
          "There was a problem retrieving data. Check the internet."
        );
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "100px",
          fontFamily: "Kalpurush",
        }}
      >
        <h2>Loading data...</h2>
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "8px solid #f3f3f3",
            borderTop: "8px solid #9c27b0",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "20px auto",
          }}
        ></div>
      </div>
    );
  }
  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Kalpurush",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#7b1fa2" }}>
        Random 10 users
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.login.uuid}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={user.picture.large}
              alt={user.name.first}
              style={{ borderRadius: "50%", width: "120px", height: "120px" }}
            />
            <h3 style={{ margin: "15px 0 5px" }}>
              {user.name.first} {user.name.last}
            </h3>
            <p style={{ color: "#666" }}>{user.email}</p>
            <p style={{ fontSize: "14px", color: "#999" }}>
              {user.location.city}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
