import React from "react";
import "../App.scss";

function Liste() {
  return (
    <div className="Liste">
      <div className="Mobile">
        <button type="button" className="bouton">
          Apple
        </button>
        <button type="button" className="bouton">
          Samsung
        </button>
        <button type="button" className="bouton">
          Xiaomi
        </button>
        <button type="button" className="bouton">
          Google
        </button>
        <button type="button" className="bouton">
          Oppo
        </button>
      </div>
    </div>
  );
}

export default Liste;
