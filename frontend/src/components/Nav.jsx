import React from "react";
import { Link } from "react-router-dom";
import Logo from "../pictures/Logo.png";
import "../App.scss";

function Nav() {
  return (
    <nav className="Nav">
      <img src={Logo} alt="Logo" className="Logo" />
      <p>Emaüss Mobile Connect</p>
      <Link to="/Login">Login</Link>
    </nav>
  );
}

export default Nav;
