import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
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
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/department" className="nav-link active"
                aria-current="page"
                href="#"> Department </Link>
            </li>
          </ul>
          <button className="btn btn-success ms-auto">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
