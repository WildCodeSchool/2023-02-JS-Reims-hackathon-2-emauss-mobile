import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Phones from "./pages/Phones";
import Analyse from "./components/Analyse";
import FilterBar from "./components/FilterBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <FilterBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/phones/:id" element={<Analyse />} />
      </Routes>
      <Phones />
      <Footer />
    </div>
  );
}

export default App;
