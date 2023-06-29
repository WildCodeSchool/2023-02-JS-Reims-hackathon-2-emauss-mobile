import React from "react";
import { Link } from "react-router-dom";
import Phones from "./Phones";

function Home() {
  return (
    <div className="Home">
      <Link to="/review">Page d'administration</Link>
      <Phones />
    </div>
  );
}
export default Home;
