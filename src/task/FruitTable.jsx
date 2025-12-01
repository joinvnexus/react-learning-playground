import React from "react";

function FruitTable() {
  const fruits = [
    {
      name: "আপেল",
      price: 120,
    },
    {
      name: "কলা",
      price: 60,
    },
    {
      name: "কমলা",
      price: 80,
    },
  ];
  const tableStyle = {
    border: "1px solid #ff5722",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <div style={{ margin: "40px", fontFamily: "Kalpurush" }}>
      <h2 style={{ textAlign: "center", color: "#ff5722" }}>ফলের দাম</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#ff5722", color: "white" }}>
            <th style={tableStyle}>ফলের নাম</th>
            <th style={tableStyle}>দাম (কেজি)</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#fff8e1" : "#ffe082",
              }}
            >
              <td style={tableStyle}>{fruit.name}</td>
              <td style={tableStyle}>{fruit.price} টাকা</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FruitTable;
