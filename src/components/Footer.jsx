import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        color: "#333",
        fontSize: "14px",
        lineHeight: "1.8",
      }}
    >
      {/* Top Bar */}
       <div style={{ backgroundColor: "#f8f9fa", padding: "25px 0" }}>
      <div
        className="container d-flex justify-content-center align-items-center gap-4 flex-wrap"
      >
        {/* Contact Info */}
        <p style={{ fontSize: "15px", margin: 0, whiteSpace: "nowrap" }}>
          To be delighted, Call us on{" "}
          <span style={{ fontWeight: "bold", color: "#d9534f" }}>
            +91 7030 73 73 73
          </span>{" "}
          or write to us at{" "}
          <a
            href="mailto:contactus@mandai.in"
            style={{ fontWeight: "500", color: "#d9534f", textDecoration: "none" }}
          >
            contactus@mandai.in
          </a>
        </p>

        {/* Social Icons */}
        <div className="d-flex gap-3">
          <a href="#" style={{ color: "#333" }}>
            <FaFacebookF size={20} />
          </a>
          <a href="#" style={{ color: "#333" }}>
            <FaGooglePlusG size={22} />
          </a>
          <a href="mailto:contactus@mandai.in" style={{ color: "#333" }}>
            <FaEnvelope size={20} />
          </a>
          <a href="#" style={{ color: "#333" }}>
            <FaInstagram size={20} />
          </a>
          <a href="#" style={{ color: "#333" }}>
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
      {/* Links Section */}
      <div className="container">
        <div className="row text-start">
          {/* Fresh Veggies */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>Fresh Veggies</h6>
            <ul className="list-unstyled">
              <li>Root Vegetables</li>
              <li>Leafy Vegetables</li>
              <li>Fruit Vegetables</li>
              <li>Exotic Vegetables</li>
              <li>Sprouts</li>
            </ul>
          </div>

          {/* Fresh Fruits */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>Fresh Fruits</h6>
            <ul className="list-unstyled">
              <li>Fresh Fruits</li>
              <li>Seasonal Fruits</li>
              <li>Exotic Fruits</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>Useful Links</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Download Links</li>
              <li>Offers</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Top Cities */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>Top Cities</h6>
            <ul className="list-unstyled">
              <li>Pune</li>
            </ul>
            
            {/* Download App */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>Download App</h6>
            <hr
              style={{
                margin: "5px 0 10px 0",
                borderTop: "1px solid #ccc",
                width: "120px",
              }}
            />
            <div className="d-flex flex-column gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ width: "130px" }}
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                style={{ width: "130px" }}
              />
            </div>
          </div>

          </div>

          {/* Payment Method */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>Payment Method</h6>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <img
                src="https://mandai.in/assets/common/images/footer-icons/pyicon-6.svg"
                alt="Cash"
                style={{ width: "40px" }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                style={{ width: "40px" }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                alt="MasterCard"
                style={{ width: "40px" }}
              />
              <img
                src="https://mandai.in/assets/common/images/footer-icons/pyicon-3.svg"
                alt="American Express"
                style={{ width: "40px" }}
              />
              <img
                src="https://mandai.in/assets/common/images/footer-icons/pyicon-4.svg"
                alt="Discover"
                style={{ width: "40px" }}
              />
              <img
                src="https://mandai.in/assets/common/images/footer-icons/sudexo.png"
                alt="Sodexo"
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          padding: "12px 0",
          marginTop: "20px",
        }}
      >
        <div className="container text-center">
          <p style={{ fontSize: "13px", marginBottom: "5px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              About Us
            </a>{" "}
            |{" "}
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              Contact Us
            </a>{" "}
            |{" "}
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              Terms Of Service
            </a>
          </p>
          <p style={{ fontSize: "13px", marginBottom: "0" }}>
            Designed & Developed by{" "}
            <a href="#" style={{ fontWeight: "bold", color: "#0d6efd" }}>
              Syntech Solutions
            </a>{" "}
            (IT Division in Kothari Group) | © Copyright 2020{" "}
            <span style={{ fontWeight: "bold" }}>Maulee Mandai</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
