import React from "react";


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
      <div className="modal-dialog modal-lg ">
        <div className="modal-content">
          <div className="modal-header" style={{backgroundColor:"darkblue"}}>
            <h5 className="modal-title text-white" id="categoryModalLabel">
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
                 
                    <img style={{height: '60px'}}
                      src={cat.img}
                      className="img-top"
                      alt={cat.name}
                    />
                    <div className="card-body p-2">
                      <h6 className="">{cat.name}</h6>
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
