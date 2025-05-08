import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./Book.png";

export default function Electronics() {

  const [count, setcount] = useState(0);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>HomeAppliances</h1>

      <div style={{ display: "flex" }}>

        <div  style={{padding: "20px"}}>
          <img src={img1} alt="Book" style={{ width: "300px", height: "200px" }} />
          <h2>Book</h2>
          <button onClick={() => setcount(count + 1)}>Add</button>
          <p>Description of the Book.</p>
          <p>Book Count: {count}</p>
        </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleBack} className="btn btn-secondary">Back</button>
      </div>
      </div>
    </>
  );
}
