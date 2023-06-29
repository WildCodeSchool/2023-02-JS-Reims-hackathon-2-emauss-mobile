import React from "react";
import { Link } from "react-router-dom";
import Logo from "../pictures/Logo.png";
import "../App.scss";

function Nav() {
  return (
    <nav className="Nav">
      <div className="NAV1">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1>Emmaüss Mobile Connect</h1>
        <Link to="/Login" className="link">
          Se connecter
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
