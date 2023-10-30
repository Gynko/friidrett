import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import IconLink from "../iconLink/iconLink.component";

import "./header.styles.css";
import Logo from "../../assets/graphics/logo.png";
import Menu from "../../assets/graphics/menu.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const { user, setUser, visibleMenuMobile, setVisibleMenuMobile } =
    useContext(UserContext);

  const navigate = useNavigate();
  function showMenu() {
    setVisibleMenuMobile(!visibleMenuMobile);
  }

  function logout() {
    setUser(undefined);
    return navigate("/");
  }

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/">
              <img src={Logo} alt="logo" width="64" />
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__links" to="/">
              home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__links links-not-mobile" to="/members">
              members
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__links links-not-mobile" to="/races">
              races
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__links links-not-mobile" to="/results">
              results
            </Link>
          </li>
          {user === "admin" ? (
            <button className="header__nav-button-logout" onClick={logout}>
              Logout
            </button>
          ) : null}
          {user === "admin" ? (
            <li className="header__nav-item">
              <button className="header__nav-menu-button" onClick={showMenu}>
                <img src={Menu} alt="menu" height="52" />
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
      {visibleMenuMobile ? (
        <div className="header__menu-mobile">
          <IconLink icon="members" text="Members" />
          <IconLink icon="races" text="Races" />
          <IconLink icon="results" text="Results" />
        </div>
      ) : null}
    </header>
  );
}
