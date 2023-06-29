import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhoneState from "./PhoneState";

function Analyse() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6005"
      }/phones/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhone(data);
      })
      .catch((error) => {
        console.error("Error fetching phone details:", error);
      });
  }, [id]);

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    phone && (
      <section className="section1">
        <div className="phone-card">
          <img src={phone.image} alt={phone.phone_name} />
          <h1>{phone.phone_name}</h1>
          <p>Brand: {phone.brand}</p>
          <p>Version OS: {phone.version_os}</p>
          <p>Stockage: {phone.storage}</p>
          <p>Dimensions: {phone.dimensions}</p>
          <p>Réseau: {phone.network}</p>
          <p>Ram: {phone.ram}</p>
          <p className="price">Price: {phone.price.toFixed(2)}</p>
        </div>
        <PhoneState />
        <button type="button" className="button2">
          Envoyé les données
        </button>
      </section>
    )
  );
}

export default Analyse;
