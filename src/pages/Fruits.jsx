import React from "react";
import ItemCard from "./ItemCard";
import { fruits } from "../data/Fruits"; 
import { Link } from "react-router-dom";

const Fruits = () => {
  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Fresh Fruits</li>
        </ol>
      </nav>
      <h3 className="mb-3 fw-bold">Fresh Fruits</h3>
      <div className="d-flex flex-wrap justify-content-start">
        {fruits.map((veg) => (
          <ItemCard key={veg.id} item={veg} />
        ))}
      </div>
    </div>
  );
};

export default Fruits;
