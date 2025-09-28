import React from "react";
import ItemCard from "./ItemCard";
import { fruits } from "../data/Fruits";
import { Link } from "react-router-dom";
import "./Veggies.css"; // Reuse the same CSS

const categories = [
  { name: "Root Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/root_vegetables.png" },
  { name: "Leafy Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/leafy_vegetables.png" },
  { name: "Fruit Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/fruit_vegetables.png" },
  { name: "Exotic Vegetables", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/exotic_vegetables.png" },
  { name: "Sprouts", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/sprouts.png" },
  { name: "Fresh Fruits", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/fresh_fruits.png" },
  { name: "Seasonal Fruits", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/seasonal_fruits.png" },
  { name: "Exotic Fruits", img: "https://mandai.in/admin/assets/admin/images/mandai_online/category/exotic_fruits.png" }
];

const Fruits = () => {
  return (
    <div className="veggies-page">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Fresh Fruits
          </li>
        </ol>
      </nav>

      {/* Categories Section */}
      <div
        className="d-flex justify-content-center overflow-auto mb-4 categories-row"
        style={{ gap: "20px", whiteSpace: "nowrap", padding: "10px 0" }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="text-center flex-shrink-0 category-card"
            style={{
              width: "110px",
              background: "#fff",
              borderRadius: "10px",
              padding: "10px",
            }}
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

      {/* Fruits Cards */}
      <section className="veggies-cards-section">
        <div className="container-fluid">
          <h3 className="mb-3 fw-bold">Fresh Fruits</h3>
          <div className="veggies-cards">
            {fruits.map((fruit) => (
              <ItemCard key={fruit.id} item={fruit} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fruits;
