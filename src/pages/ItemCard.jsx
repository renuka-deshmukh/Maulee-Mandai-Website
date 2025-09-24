import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="card shadow-sm m-2"
      style={{ width: "12rem", borderRadius: "12px" }}
    >
      {/* Product link */}
      <Link
        to={`/product/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="image-container position-relative">
          <span
            className="badge bg-danger position-absolute"
            style={{ top: "10px", left: "10px", zIndex: 2 }}
          >
            {item.discount}
          </span>
          <img
            src={item.img}
            className="card-img-top"
            alt={item.name}
            style={{ height: "160px", objectFit: "contain" }}
          />
        </div>
        <div className="card-body text-center">
          <p className="text-muted m-0">{item.hindi}</p>
          <h6 className="fw-bold">{item.name}</h6>
          <p className="text-secondary small">{item.type}</p>
          <h6 className="text-danger">
            ₹ {item.price}{" "}
            <small className="text-muted text-decoration-line-through">
              ₹ {item.oldPrice}
            </small>
          </h6>
          <p className="small">{item.unit}</p>
        </div>
      </Link>

      {/* Cart Button outside the Link */}
      <button
        className="btn btn-sm btn-warning w-100"
        onClick={() => addToCart(item)}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
