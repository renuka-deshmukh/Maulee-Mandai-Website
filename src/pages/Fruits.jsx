import React from "react";
import ItemCard from "./ItemCard";
import { fruits } from "../data/Fruits"; 
import { Link } from "react-router-dom";

const categories = [
  { name: "Root Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/root_vegetables.png" },
  { name: "Leafy Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/leafy_vegetables.png" },
  { name: "Fruit Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/fruit_vegetables.png"},
  { name: "Exotic Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/exotic_vegetables.png" },
  { name: "Sprouts", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/sprouts.png" },
  { name: "Fresh Fruits", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/fresh_fruits.png" },
  { name: "Seasonal Fruits", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/seasonal_fruits.png" },
  { name: "Exotic Fruits", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/exotic_fruits.png" }
];

const Fruits = () => {
  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Fresh Veggies
                </li>
              </ol>
            </nav>
      
            {/* Categories Section in ONE row */}
            <h4 className="fw-bold mb-3">Categories</h4>
            <div
              className="d-flex overflow-auto mb-4"
              style={{ gap: "20px", whiteSpace: "nowrap" }}
            >
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="text-center flex-shrink-0"
                  style={{ width: "110px" }}
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    style={{ height: "60px", marginBottom: "8px" }}
                  />
                  <h6 className="fw-light small">{cat.name}</h6>
                </div>
              ))}
            </div>
      
      
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
