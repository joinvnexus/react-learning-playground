const profilecard = () => {
  const name = "Projoy Naidu";
  const Age = 18;
  const City = "Sylhet";

  return (
    <div
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

      <p>আমার নাম: {name}</p>
      <p>বয়স: {Age} বছর</p>
      <p>শহর: {City}</p>
      <br />

      {Age >= 18 ? (
        <p style={{ color: "green", fontSize: "20px" }}>ভোট দিতে পারবেন</p>
      ) : (
        <p style={{ color: "red", fontSize: "20px" }}>এখনো পারবেন না</p>
      )}
    </div>
  );
};

export default profilecard;
