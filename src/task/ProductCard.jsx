import React from "react";


function ProductCard({ productName, price, discount, image }) {
  // discount price calculation
let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={productName}
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <h3>{productName}</h3>

      {discount ? (
        <p>
          <span style={{ textDecoration: "line-through", color: "red" }}>
            ${price}
          </span>{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            ${finalPrice}
          </span>{" "}
          <span style={{ color: "blue" }}>({discount}% OFF)</span>
        </p>
      ) : (
        <p>
          <span style={{ fontWeight: "bold" }}>${price}</span>
        </p>
      )}
    </div>
  );
}

export default ProductCard;
