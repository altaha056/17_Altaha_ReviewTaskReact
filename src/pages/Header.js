import { Link } from "react-router-dom";
import React from "react";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm nav ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./img/logo-ALTA@2x.png" alt="" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto  ">
              <Link className="nav-link text-uppercase px-5 " to="/">
                Home
              </Link>
              <Link className="nav-link text-uppercase px-5" to="/news">
                News
              </Link>
              <Link className="nav-link text-uppercase px-5 " to="/contact_us">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
