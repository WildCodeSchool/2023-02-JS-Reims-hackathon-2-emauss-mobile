import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Analyse from "./components/Analyse";
import Home from "./pages/Home";
import FilterBar from "./components/FilterBar";
import "./App.scss";
import Phones from "./pages/Phones";
import Review from "./pages/Review";

function App() {
  return (
    <div className="App">
      <Nav />
      <FilterBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/review" element={<Review />} />
        <Route path="/phones/:id" element={<Analyse />} />
      </Routes>
      <Phones />
      <Footer />
    </div>
  );
}

export default App;
