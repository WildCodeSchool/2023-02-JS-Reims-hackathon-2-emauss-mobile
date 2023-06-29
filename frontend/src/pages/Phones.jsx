import React, { useState, useEffect } from "react";
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
    <section className="phone-grid">
      {phones.map((phone) => (
        <div className="phone-card" key={phone.id}>
          <img className="imgphone" src={phone.image} alt={phone.phone_name} />
          <h1>{phone.phone_name}</h1>
          <p>Brand: {phone.brand}</p>
          <p>Version OS: {phone.version_os}</p>
        </div>
      ))}
    </section>
  );
}

export default Phones;
