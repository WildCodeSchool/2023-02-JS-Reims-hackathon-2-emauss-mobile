import React from "react";
import Nav from "./components/Nav";
import Liste from "./components/Liste";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Liste />
      <Footer />
    </div>
  );
}

export default App;
