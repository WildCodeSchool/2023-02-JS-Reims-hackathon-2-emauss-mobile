import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Phones.css";

function Phones() {
  const [phones, setPhones] = useState([]);

  const fetchPhoneData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6005"}/phones`
    )
      .then((response) => response.json())
      .then((data) => {
        const phonesRandom = data.sort(() => Math.random() - 0.5);
        setPhones(phonesRandom);
      })
      .catch((error) => {
        console.error("Error fetching phone data:", error);
      });
  };

  useEffect(() => {
    fetchPhoneData();
  }, []);

  return (
    <div className="body">
      <section className="phone-grid">
        {phones.map((phone) => (
          <Link
            to={`/phones/${phone.id}`}
            key={phone.id}
            className="phone-card"
          >
            <img
              className="imgphone"
              src={phone.image}
              alt={phone.phone_name}
            />
            <h1>{phone.phone_name}</h1>
            <p>Marque: {phone.brand}</p>
            <p>Version OS: {phone.version_os}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Phones;
