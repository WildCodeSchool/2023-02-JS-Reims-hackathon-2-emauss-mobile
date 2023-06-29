import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Analyse() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6005/phones/${id}`)
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
    <div>
      <h2>{phone.name}</h2>
      {/* Affichez les autres détails du téléphone */}
    </div>
  );
}

export default Analyse;
