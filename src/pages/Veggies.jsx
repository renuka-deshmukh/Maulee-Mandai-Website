import React from "react";
import ItemCard from "./ItemCard";
import { veggies } from "../data/Veggies"; 

const Veggies = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3 fw-bold">Fresh Veggies</h3>
      <div className="d-flex flex-wrap justify-content-start">
        {veggies.map((veg) => (
          <ItemCard key={veg.id} item={veg} />
        ))}
      </div>
    </div>
  );
};

export default Veggies;
