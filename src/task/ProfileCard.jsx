const ProfileCard = () => {
  const UserList = [
    {
      name: "Projoy Naidu",
      Age: 18,
      City: "Sylhet",
    },
    {
      name: "আলিফ আহমেদ",
      Age: 22,
      City: "ঢাকা",
    },
    {
      name: "রহিম উদ্দিন",
      Age: 20,
      City: "ঢাকা",
    },
    {
      name: "রিয়া আক্তার",
      Age: 17,
      City: "চট্টগ্রাম",
    },
  ];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
      background: "#faf5f5ff",
      fontFamily: "Kalpurush",
      textAlign: "center",
    }}>
      {UserList.map((user, index) => (
        <div
          key={index}
          style={{
            border: "3px solid #e91e63",
            borderRadius: "15px",
            padding: "30px",
            margin: "30px auto",
            maxWidth: "400px",
            fontFamily: "Kalpurush",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        >
          <h2>আমার পরিচয় কার্ড</h2>
          <p style={{ fontSize: "18px" }}>নাম: {user.name}</p>
          <p style={{ fontSize: "18px" }}>বয়স: {user.Age} বছর</p>
          <p style={{ fontSize: "18px" }}>শহর: {user.City}</p>

          {user.Age >= 18 ? (
            <p style={{ color: "green", fontSize: "20px" }}>ভোট দিতে পারবেন</p>
          ) : (
            <p style={{ color: "red", fontSize: "20px" }}>এখনো পারবেন না</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
