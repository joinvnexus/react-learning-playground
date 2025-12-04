import React from "react";
import ProductCard from "./ProductCard";

export default function App() {
  const products = [
    {
      productName: "Wireless Headphones",
      price: 120,
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1518449074320-716d7f14c3c7?w=400",
    },
    {
      productName: "Smart Watch",
      price: 90,
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
    },
    {
      productName: "Gaming Mouse",
      price: 45,
      discount: 0,
      image:
        "https://images.unsplash.com/photo-1584270354949-1debf4f8f749?w=400",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {products.map((item, index) => (
        <ProductCard
          key={index}
          productName={item.productName}
          price={item.price}
          discount={item.discount}
          image={item.image}
        />
      ))}
    </div>
  );
}
