import React, { useContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    
  const [pnumber, setPnumber] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const inputRef = useRef(null);

   const { loggedUser, login } = useContext(AuthContext);


   function handleLogin(event){
   event.preventDefault()
   try {
    const msg = login(pnumber, password)
    if(msg) {
      alert (msg);
      navigate('/')
    }
    
   } catch (error) {
    console.log(error)
   }
   }

  useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, []); 



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

      <form onSubmit={handleLogin}>
               {/* Phone Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="📱 Enter Phone Number"
            value={pnumber}
            onChange={(e)=>setPnumber(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="🔒 Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {/* Sign in Button */}
        <button
          type="submit"
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
      </form>


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
