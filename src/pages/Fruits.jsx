import React from "react";
import ItemCard from "./ItemCard";
import { fruits } from "../data/Fruits"; 

const Fruits = () => {
  return (
    <div className="container mt-4">
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
