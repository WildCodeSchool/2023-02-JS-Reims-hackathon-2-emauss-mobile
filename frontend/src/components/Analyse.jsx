import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Analyse() {
  const [phone, setPhone] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6005"
      }/phones/${id}`
    )
      .then((response) => response.json())
      .then((data) => setPhone(data));
  }, []);
  return (
    phone && (
      <section>
        <div className="phone-card">
          <img src={phone.image} alt={phone.phone_name} />
          <h1>{phone.phone_name}</h1>
          <p>Brand: {phone.brand}</p>
          <p>Version OS: {phone.version_os}</p>
          <p>Stockage: {phone.storage}</p>
          <p>Dimensions: {phone.dimensions}</p>
          <p>Réseau: {phone.network}</p>
          <p>Ram: {phone.ram}</p>
        </div>
      </section>
    )
  );
}

export default Analyse;
