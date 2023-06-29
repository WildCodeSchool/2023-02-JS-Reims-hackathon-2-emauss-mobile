import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import "./App.scss";
import Phones from "./pages/Phones";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <FilterBar />
      <Routes>
        <Route
          path="/"
          element={<Link to="/Analyse">Analyse du téléphone</Link>}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Phones />
      <Footer />
    </div>
  );
}

export default App;
