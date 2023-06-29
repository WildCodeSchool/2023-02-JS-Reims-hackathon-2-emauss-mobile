import React from "react";
import { Link } from "react-router-dom";
import Logo from "../pictures/Logo.png";
import { useAuth } from "../contexts/AuthContext";
import "../App.scss";

function Nav() {
  const { token } = useAuth();
  return (
    <nav className="Nav">
      <div className="NAV1">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1>Emmaüs Mobile Connect</h1>
        {!token ? (
          <Link to="/Login" className="link">
            Se connecter
          </Link>
        ) : (
          <Link to="/Review" className="link">
            Page d'administration
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
