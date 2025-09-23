import React from "react";
import "./CategoryModal.css"; // create this file for custom styles

const CategoryModal = () => {
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

  return (
    <div
      className="modal fade"
      id="categoryModal"
      tabIndex="-1"
      aria-labelledby="categoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content no-radius">
          {/* Gradient Header */}
          <div className="modal-header gradient-header">
            <h5 className="modal-title text-white" id="categoryModalLabel">
              Select Category
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body fw-light">
            <div className="row text-center">
              {categories.map((cat, index) => (
                <div key={index} className="col-6 col-md-4 mb-3">
                  <img
                    style={{ height: "50px" }}
                    src={cat.img}
                    alt={cat.name}
                  />
                  <div className="card-body fw-light p-2">
                    <h6>{cat.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
