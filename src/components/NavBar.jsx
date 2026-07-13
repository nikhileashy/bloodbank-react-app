import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ 
      backgroundColor: "#0077ff", 
      color: "#fff",
      textColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "12px 20px"
    }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "#ffffff", fontWeight: "600" }}>
          Blood Bank App
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "1px solid #edf2f7" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/add" style={{ color: "#fff" }}>
                Add Donor Form
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/view" style={{ color: "#fff" }}>
                View All Donors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
