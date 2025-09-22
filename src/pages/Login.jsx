import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          "url('https://mandai.in/assets/common/images/back1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "500px", borderRadius: "5px" }}
      >
        <h4 className="text-center fw-bold mb-2">Login Now</h4>
        <p className="text-center text-muted">
          Please Login to Continue Our App
        </p>

        {/* Phone Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="📱 Enter Phone Number"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="🔒 Enter Password"
          />
        </div>

        {/* Sign in Button */}
        <button
          className="btn w-100 mb-2"
          style={{ backgroundColor: "#8BC34A", color: "white" }}
        >
          Sign In With Password
        </button>

        <div className="text-center mb-2">
          <a href="#" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>

        <div className="text-center fw-bold mb-2">OR</div>

        {/* OTP & Sign Up Buttons */}
        <div className="d-flex justify-content-between">
          <button
            className="btn w-50 me-2"
            style={{ backgroundColor: "#FF5722", color: "white" }}
          >
            Sign In With OTP
          </button>

          {/* Link to Register Page */}
          <Link
            to="/register"
            className="btn w-50"
            style={{ backgroundColor: "#8BC34A", color: "white", textAlign: "center" }}
          >
            Sign Up Now
          </Link>
        </div>


        {/* Footer */}
        <div className="text-center mt-3" style={{ fontSize: "12px" }}>
          Designed & Developed By{" "}
          <a href="#" className="text-primary fw-bold">
            Syntech Solutions
          </a>
          <br />
          © Copyright 2020 <b>Maulee Mandai</b>. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Login;
