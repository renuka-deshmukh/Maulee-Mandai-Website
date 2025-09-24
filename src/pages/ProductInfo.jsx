import React from "react";
import { useParams } from "react-router-dom";
import { veggies } from "../data/Veggies"; // your product list

const ProductInfo = () => {
  const { id } = useParams();
  const product = veggies.find((p) => p.id.toString() === id);

  if (!product) {
    return <h3 className="text-center mt-5">Product Not Found</h3>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        {/* Left: Image + Badge */}
        <div className="col-md-5 text-center">
          <div className="position-relative">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "320px", objectFit: "contain" }}
            />
            <span
              className="badge bg-danger position-absolute"
              style={{ top: "10px", left: "10px" }}
            >
              {product.discount}
            </span>
          </div>
        </div>

        {/* Right: Info */}
        <div className="col-md-7">
          <h4 className="fw-bold">
            {product.name} <span className="text-muted">[{product.hindi}]</span>
          </h4>
          <p className="text-success fw-semibold">{product.type}</p>
          <p>{product.unit}</p>

          <h6>
            <span className="text-muted text-decoration-line-through">
              MRP ₹{product.oldPrice}
            </span>{" "}
            <span className="ms-2">
              Discount Price{" "}
              <strong className="text-danger">₹{product.price}</strong>
            </span>
          </h6>
          <p className="text-muted small">
            You Save:{" "}
            <span className="text-success fw-bold">{product.discount}</span>{" "}
            (Inclusive of all taxes)
          </p>

          <button className="btn btn-danger mb-3">🛒 Add Cart</button>

          <p className="small text-secondary">
            🚚 Standard Delivery Time: 12.00 PM to 06.00 PM
          </p>

          <div className="bg-light p-3 rounded">
            <h6>
              <strong>Material Description :</strong>
            </h6>
            <ul>
              <li>{product.description || "No description available."}</li>
            </ul>
          </div>

          <p className="mt-2 fw-semibold text-success">
            {product.available ? "Available" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
