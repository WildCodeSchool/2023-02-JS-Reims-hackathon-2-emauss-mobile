import React from "react";
import { Link } from "react-router-dom";
import Phones from "./Phones";

function Home() {
  return (
    <div className="Home">
      <Link to="/admin">Analyse du téléphone</Link>
      <Phones />
    </div>
  );
}
export default Home;
