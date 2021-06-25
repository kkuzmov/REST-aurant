import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import NavigationGuest from "./Navigation/NavigationGuest";
import NavigationUser from "./Navigation/NavigationUser";

import "./Header.css";

function Header() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <header className="main-header">
        <section className="logo-in-header">
          <Link to="/" className="nav-link">
            <i className="fas fa-hamburger"></i>
          </Link>
          <h1>REST-aurant</h1>
        </section>
        <nav>
          <NavigationUser />
        </nav>
      </header>
    );
  }

  return (
    <header className="main-header">
      <section className="logo-in-header">
        <Link to="/" className="nav-link">
          <i className="fas fa-hamburger"></i>
        </Link>
        <h1>REST-aurant</h1>
      </section>
      <nav>
        <NavigationGuest />
      </nav>
    </header>
  );
}

export default Header;
