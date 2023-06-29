import { useState } from "react";
import "./FilterBar.css";

// eslint-disable-next-line react/prop-types
export default function FilterBar({ onFilter }) {
  const [brand, setBrand] = useState("");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilter({ brand });
  };

  return (
    <div className="filters">
      <form onSubmit={handleFilterSubmit}>
        <select value={brand} onChange={handleBrandChange}>
          <option value="">Marque</option>
          <option value="">Toutes</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="google">Google</option>
          <option value="oppo">Oppo</option>
          <option value="xiaomi">Xiaomi</option>
          <option value="lg">LG</option>
        </select>

        <select>
          <option value="">Taille d'écran</option>
          <option value="">Toutes</option>
          <option value="<5">5"</option>
          <option value="5-6">5"-6"</option>
          <option value=">6">+6"</option>
        </select>

        <select>
          <option value="">Prix</option>
          <option value="">Tous</option>
          <option value="-300">-300€</option>
          <option value="300-600">300€-600€</option>
          <option value=">600">+600€</option>
        </select>

        <select>
          <option value="">Etat</option>
          <option value="">Tous</option>
          <option value="new">Neuf</option>
          <option value="used">Occasion</option>
        </select>

        <select>
          <option value="">Stockage</option>
          <option value="">Tous</option>
          <option value="<64">64GB</option>
          <option value="64">64GB</option>
          <option value="128">128GB</option>
          <option value="256">256GB</option>
          <option value="512">512GB</option>
        </select>
      </form>
    </div>
  );
}
