import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Analyse from "./components/Analyse";
import Phones from "./pages/Phones";
import FilterBar from "./components/FilterBar";
import "./App.scss";
import PhoneState from "./components/PhoneState";

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
        <Route path="/phones/:id" element={<Analyse />} />
      </Routes>
      <Phones />
      <PhoneState />
      <Footer />
    </div>
  );
}

export default App;
