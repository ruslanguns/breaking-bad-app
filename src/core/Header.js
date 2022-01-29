import { NavLink } from "react-router-dom";
import { PATHS } from "./../helpers/paths";
import { useTranslation } from "react-i18next";
const Header = () => {
  
const { t } = useTranslation();
  return (
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
          <NavLink to={PATHS.HOME} className="navbar-brand">
            Breaking Bad
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={PATHS.HOME}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                { t("navbar.home") }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={PATHS.ALL_CHARACTERS}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                { t("navbar.characters") }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={PATHS.EPISODES}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                { t("navbar.episodes") }
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={PATHS.VOTES}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                { t("navbar.home") }
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
