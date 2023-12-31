import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.scss";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6005"}/login`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        navigate("/");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="formulaire">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" id="username" ref={usernameRef} />

          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" ref={passwordRef} />

          <div className="controls">
            <button type="submit">Connexion</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
