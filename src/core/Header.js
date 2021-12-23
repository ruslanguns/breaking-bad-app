import { Link } from "react-router-dom";
import { PATHS } from "./../helpers/paths";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to={PATHS.HOME} className="navbar-brand">
          Breaking Bad
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={PATHS.HOME} className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={PATHS.EPISODES} className="nav-link">
              Episodes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
