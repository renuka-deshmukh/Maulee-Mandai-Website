import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Register = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('https://mandai.in/assets/common/images/back1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "500px", borderRadius: "5px" }}
      >
        <h4 className="text-center fw-bold mb-2">Sign Up Now !</h4>
        <p className="text-center text-muted mb-4">
          Please Fill the details and create account
        </p>

        <form>
          {/* Full Name */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              required
            />
          </div>

          {/* Email */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Phone */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-phone"></i>
            </span>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              maxLength="10"
              required
            />
          </div>

          {/* Password */}
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-100 text-white mb-3"
            style={{ backgroundColor: "#8BC34A" }}
          >
            Sign Up Now
          </button>

          {/* Back to Login */}
          <div className="text-center">
            <Link to="/login" className="text-decoration-none">
              <i className="fa fa-arrow-left me-1"></i> Back To Login
            </Link>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-4 small text-muted">
          Designed &amp; Developed By{" "}
          <a
            href="https://www.syntech.co.in/"
            target="_blank"
            rel="noreferrer"
          >
            <u>Syntech Solutions</u>
          </a>
          <br />
          © Copyright 2020 <b>Maulee Mandai</b>. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Register;
