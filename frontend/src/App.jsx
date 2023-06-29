import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import "./App.scss";

import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <FilterBar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div>
        <h1>Bonjour</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          architecto officia magnam labore alias nesciunt qui tempora omnis
          molestiae cumque aut, modi maiores fuga nisi dolorem est quae totam!
          Eius.
        </p>
        <img
          src="https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/512583_4d813e9a-b1b4-4d25-b40f-4b770111d865.jpg"
          alt="Phone"
        />
        <img
          src="https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/512583_4d813e9a-b1b4-4d25-b40f-4b770111d865.jpg"
          alt="Phone"
        />{" "}
        <img
          src="https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/512583_4d813e9a-b1b4-4d25-b40f-4b770111d865.jpg"
          alt="Phone"
        />{" "}
        <img
          src="https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d1eh9yux7w8iql.cloudfront.net/product_images/512583_4d813e9a-b1b4-4d25-b40f-4b770111d865.jpg"
          alt="Phone"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
