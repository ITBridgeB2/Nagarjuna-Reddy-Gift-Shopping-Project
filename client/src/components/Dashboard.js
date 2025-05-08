import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="category-list">
        <button onClick={() => handleCategoryClick("Electronics")}>Electronics</button> <br/> <br/>
        <button onClick={() => handleCategoryClick("HomeAppliances")}>Home Appliances</button> <br/> <br/>
        <button onClick={() => handleCategoryClick("Books")}>Books</button>
      </div>
    </div>
  );
}
