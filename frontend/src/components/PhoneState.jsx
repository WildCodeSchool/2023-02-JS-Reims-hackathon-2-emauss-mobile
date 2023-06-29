import React from "react";
import "./PhoneState.css";

export default function PhoneState() {
  return (
    <div className="phonestate">
      <h3 className="state">Etat</h3>
      <div>
        <form>
          <div>
            <label htmlFor="deee">Deee</label>
            <input type="checkbox" name="cheese" id="cheese" />
          </div>

          <div>
            <label htmlFor="repairable">Réparable</label>
            <input type="checkbox" name="peas" id="peas" />
          </div>
          <div>
            <label htmlFor="reconditoned">Reconditionné</label>
            <input type="checkbox" name="cheese2" id="cheese2" />
          </div>

          <div>
            <label htmlFor="good">Bon état</label>
            <input type="checkbox" name="peas2" id="peas2" />
          </div>
        </form>
      </div>
    </div>
  );
}
