import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Emmaus Mobile Connect</h3>
        <div className="footer-legal">
          <p>Mentions légales</p>
          <p>Politique des données personnelles</p>
          <p>Paramètres des cookies</p>
        </div>
        <ul className="socials">
          <li>
            <FaGoogle size={30} color="#DB4437" />
          </li>
          <li>
            <FaInstagram size={30} color="#C13584" />
          </li>
          <li>
            <FaLinkedin size={30} color="#0077B5" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default footer;
