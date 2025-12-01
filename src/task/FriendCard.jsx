// src/ProfileCard.js
function FriendCard({ name, age, city, isStudent, photo }) {
  return (
    <div style={{
      border: "4px solid #2196f3",
      borderRadius: "20px",
      padding: "25px",
      margin: "20px auto",
      maxWidth: "350px",
      textAlign: "center",
      fontFamily: "Kalpurush",
      backgroundColor: "#e3f2fd",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
    }}>
      {photo && <img src={photo} alt={name} style={{ width: "120px", borderRadius: "50%" }} />}
      
      <h2 style={{ color: "#1976d2" }}>{name}</h2>
      <p>বয়স: <strong>{age}</strong> বছর</p>
      <p>শহর: <strong>{city}</strong></p>
      
      {isStudent ? (
        <span style={{ background: "green", color: "white", padding: "5px 15px", borderRadius: "20px" }}>
          ছাত্র
        </span>
      ) : (
        <span style={{ background: "orange", color: "white", padding: "5px 15px", borderRadius: "20px" }}>
          চাকরিজীবী
        </span>
      )}

      {age >= 18 ? (
        <p style={{ color: "green", marginTop: "10px" }}>ভোট দিতে পারবেন</p>
      ) : (
        <p style={{ color: "red" }}>এখনো পারবেন না</p>
      )}
    </div>
  );
}

export default FriendCard;