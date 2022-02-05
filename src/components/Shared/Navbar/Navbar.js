import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link me-5 active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5" href="#">
                Patient
              </a>
            </li>
            <li class="nav-item">
              <Link to="/dashboard/appointment" class="nav-link me-5" href="#">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5 text-white" href="#">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5 text-white" href="#">
                Blocks
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5 text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
