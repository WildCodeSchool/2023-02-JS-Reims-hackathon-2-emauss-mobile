import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhoneState from "./PhoneState";

function Analyse() {
  const [phone, setPhone] = useState(null);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
      }/phones/${id}`
    )
      .then((response) => response.json())
      .then((data) => setPhone(data));
  }, []);

  return (
    <div className="conteneur">
      {loading ? (
        <div className="loader-container" />
      ) : (
        phone && (
          <section>
            <div className="phone-card">
              <img
                src={phone.image}
                alt={phone.phone_name}
                className="Samsungphone"
              />
              <h1>{phone.phone_name}</h1>
              <p>Brand: {phone.brand}</p>
              <p>Version OS: {phone.version_os}</p>
              <p>Stockage: {phone.storage}</p>
              <p>Dimensions: {phone.dimensions}</p>
              <p>Réseau: {phone.network}</p>
              <p>Ram: {phone.ram}</p>
            </div>
            <PhoneState />
          </section>
        )
      )}
    </div>
  );
}

export default Analyse;
