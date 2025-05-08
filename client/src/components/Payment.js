import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Payment() {
    
  const { cart } = useContext(CartContext);

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.count * item.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Payment Summary</h1>

      {Object.values(cart).map((item, index) => (
        <div key={index}>
          <h3>{item.itemName} ({item.category})</h3>
          <p>Quantity: {item.count}</p>
          <p>Price: ₹{item.price}</p>
          <p>Subtotal: ₹{item.count * item.price}</p>
          <hr />
        </div>
      ))}

      <h2>Total Amount: ₹{total}</h2>
    </div>
  );
}
