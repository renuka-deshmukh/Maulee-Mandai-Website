import React from "react";

const CategoryModal = () => {
  const categories = [
    { name: "Vegetables", img: "https://via.placeholder.com/150?text=Vegetables" },
    { name: "Fruits", img: "https://via.placeholder.com/150?text=Fruits" },
    { name: "Dairy", img: "https://via.placeholder.com/150?text=Dairy" },
    { name: "Bakery", img: "https://via.placeholder.com/150?text=Bakery" },
    { name: "Snacks", img: "https://via.placeholder.com/150?text=Snacks" },
    { name: "Beverages", img: "https://via.placeholder.com/150?text=Beverages" },
  ];

  return (
    <div
      className="modal fade"
      id="categoryModal"
      tabIndex="-1"
      aria-labelledby="categoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="categoryModalLabel">
              Select Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row text-center">
              {categories.map((cat, index) => (
                <div key={index} className="col-6 col-md-4 mb-3">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={cat.img}
                      className="card-img-top"
                      alt={cat.name}
                    />
                    <div className="card-body p-2">
                      <h6 className="fw-bold">{cat.name}</h6>
                    </div>
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
