import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" }); // success/error messages

  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    if (pnumber.length !== 10) {
      setMessage({ type: "danger", text: "Phone number must be 10 digits" });
      return;
    }
    if (password.length < 6) {
      setMessage({
        type: "danger",
        text: "Password must be at least 6 characters",
      });
      return;
    }

    const userData = {
      name: userName,
      email: email,
      pnumber: pnumber,
      password: password,
    };

    // Get users from localStorage
    let existingUsers = JSON.parse(localStorage.getItem("users"));

  
    if (!Array.isArray(existingUsers)) {
      existingUsers = [];
    }

    // Prevent duplicate email
    const userExists = existingUsers.find((user) => user.email === email);
    if (userExists) {
      setMessage({ type: "danger", text: "User with this email already exists" });
      return;
    }

    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setMessage({ type: "success", text: "Registration successful! Redirecting..." });

    setUserName("");
    setEmail("");
    setPnumber("");
    setPassword("");

    setTimeout(() => navigate("/login"), 2000);
  }

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
        style={{ width: "500px", borderRadius: "8px" }}
      >
        <h4 className="text-center fw-bold mb-2">Sign Up Now!</h4>
        <p className="text-center text-muted mb-4">
          Please fill the details to create your account
        </p>

        {/*  Show Alerts */}
        {message.text && (
          <div className={`alert alert-${message.type}`} role="alert">
            {message.text}
          </div>
        )}

        <form onSubmit={handleRegister}>
          {/* Full Name */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={pnumber}
              onChange={(e) => setPnumber(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <a href="https://www.syntech.co.in/" target="_blank" rel="noreferrer">
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
