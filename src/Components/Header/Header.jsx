import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link to='/' className="navbar-brand" href="#">
          StudyTube
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Department
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to='/cse' className="dropdown-item" href="#">
                    CSE
                  </Link>
                </li>
                <li>
                  <Link to='/eee' className="dropdown-item" href="#">
                    EEE
                  </Link>
                </li>
                <li>
                  <Link to='/ete' className="dropdown-item" href="#">
                    ETE
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-success ms-auto">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
