import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import img1 from "./image.png";
import light from "./light.png";

export default function Electronics() {
  const { addItem, cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Helper to get count of specific item
  const getQuantity = (name) => {
    const item = cart.find(i => i.name === name && i.category === "Electronics");
    return item ? item.quantity : 0;
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Electronics</h1>

      <div style={{ display: "flex" }}>
        <div style={{ padding: "20px" }}>
          <img src={img1} alt="Fan" style={{ width: "300px", height: "200px" }} />
          <h2>Fan</h2>
          <p>₹1500</p>
          <button onClick={() => addItem("Electronics", "Fan", 1500)}>Add to Cart</button>
          <p>Selected: {getQuantity("Fan")} item(s)</p>
        </div>

        <div style={{ padding: "20px" }}>
          <img src={light} alt="Light" style={{ width: "300px", height: "200px" }} />
          <h2>Light</h2>
          <p>₹800</p>
          <button onClick={() => addItem("Electronics", "Light", 800)}>Add to Cart</button>
          <p>Selected: {getQuantity("Light")} item(s)</p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => navigate("/Dashboard")}>Back</button>
        <button onClick={() => navigate("/Payment")}>Go to Payment</button>
      </div>
    </>
  );
}
