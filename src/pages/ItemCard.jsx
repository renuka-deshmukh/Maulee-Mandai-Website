import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="card shadow-sm m-2" style={{ width: "16rem", borderRadius: "12px" }}>
      {/* Discount Badge */}
      <span
        className="badge bg-danger position-absolute"
        style={{ top: "10px", left: "10px" }}
      >
        {item.discount}
      </span>

      {/* Image */}
      <img
        src={item.img}
        className="card-img-top"
        alt={item.name}
        style={{ height: "160px", objectFit: "contain" }}
      />

      {/* Card Body */}
      <div className="card-body text-center">
        <p className="text-muted m-0">{item.hindi}</p>
        <h6 className="fw-bold">{item.name}</h6>
        <p className="text-secondary small">{item.type}</p>

        {/* Price */}
        <h6 className="text-danger">
          ₹ {item.price}{" "}
          <small className="text-muted text-decoration-line-through">
            ₹ {item.oldPrice}
          </small>
        </h6>
        <p className="small">{item.unit}</p>

        {/* Cart Button */}
        <button className="btn btn-sm btn-warning w-100">🛒 Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
