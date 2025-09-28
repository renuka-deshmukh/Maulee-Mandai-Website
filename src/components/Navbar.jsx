import React, { useContext } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { cartItems } = useCart();
  const { loggedUser, logout } = useContext(AuthContext);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://mandai.in/assets/common/images/logo.jpg"
              alt="Logo"
              style={{ width: "120px" }}
            />
          </Link>

          {/* Right-side items */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-md-none">
            {/* Show cart icon only on small screens */}
            <li className="nav-item me-3">
              <Link className="nav-link" to="/cart">
                🛒 ({cartItems.length})
              </Link>
            </li>
          </ul>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavbar"
            aria-controls="topNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse content */}
          <div className="collapse navbar-collapse" id="topNavbar">
            {/* Location Dropdown */}
            <div className="dropdown me-3">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="locationDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                📍 Pune
              </button>
              <ul className="dropdown-menu" aria-labelledby="locationDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Pune
                  </a>
                </li>
              </ul>
            </div>

            {/* Searchbox in center */}
            <form
              className="d-flex mx-auto my-2 my-md-0 flex-grow-1"
              style={{ maxWidth: "40%" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
            </form>

            {/* Right-side items */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item me-3 d-none d-md-block">
                <Link className="nav-link" to="/cart">
                  🛒 Cart ({cartItems.length})
                </Link>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="tel:+917030737373">
                  📞 +91 7030 73 73 73
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  🎁 Offers
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  ❓ Help
                </a>
              </li>

              {/* User Section */}
              {loggedUser ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    👤 {loggedUser.name}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={logout}
                      >
                        🚪 Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="loginDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    🔑 Login
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="loginDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar (Menu Bar) */}
      <nav className="navbar navbar-expand-md navbar-light bg-white border-top shadow-sm">
        <div className="container-fluid">
          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bottomNavbar"
            aria-controls="bottomNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="bottomNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a
                  className="nav-link category-link"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#categoryModal"
                >
                  📂 Select Category
                </a>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/fresh-veggies">
                  Fresh Veggies
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/fresh-fruits">
                  Fresh Fruits
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
