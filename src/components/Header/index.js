import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/aplicativo_escolar.png";
import './index.css'


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Link to="/">
            <img src={logoImage} />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/register">Register</Link>
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-outline-info">
                <Link to="/login">Login</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
