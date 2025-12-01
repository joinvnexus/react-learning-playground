// import react from "react";

const Task1 = () => {
  const name = "Projoy Naidu";
  const Age = 18;
  const City = "Sylhet";

  const fruits = [
    { name: "আপেল", price: 120 },
    { name: "কলা", price: 60 },
    { name: "কমলা", price: 80 },
  ];

  return (
    <div
      style={{ padding: "40px", fontFamily: "Kalpurush", textAlign: "center" }}
    >
      <h1 style={{ color: "#e91e63" }}>আমার পরিচয়</h1>

      <p style={{ fontSize: "20px" }}>
        আমার নাম: <strong>{name}</strong>
      </p>
      <p>
        বয়স: <strong>{Age}</strong> বছর
      </p>
      <p>
        শহর: <strong>{City}</strong>
      </p>

      <br />
      {/* Condational rendering */}
      {Age >= 18 ? (
        <p style={{ color: "green", fontSize: "24px", fontWeight: "bold" }}>
          ভোট দিতে পারবেন
        </p>
      ) : (
        <p style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>
          এখনো পারবেন না
        </p>
      )}
      <br />

      {/* list  */}
      <h2>ফলের দামের তালিকা</h2>

      <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#ff9800", color: "white" }}>
            <th style={{ padding: "15px", border: "2px solid black" }}>
              ফলের নাম
            </th>
            <th style={{ padding: "15px", border: "2px solid black" }}>
              দাম (প্রতি কেজি)
            </th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 1 ? "#1b1a19ff" : "#ffe0b2" }}>
              <td style={{ padding: "12px", border: "2px solid black" }}>{fruit.name}</td>
              <td style={{ padding: "12px", border: "2px solid black" }}>{fruit.price} টাকা</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task1;
