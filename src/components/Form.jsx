import React, { useState } from "react";

import useWeather from "../hooks/useWeather";

export const Form = () => {
  const [alert, setAlert] = useState("");
  const { search, searchData, getWeather } = useWeather();
  const { city, country } = search;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
    getWeather(search);
  };
  return (
    <div className="contenedor">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city" className="ciudad">
            Ciudad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="campo">
          <label htmlFor="country" className="ciudad">
            Pais
          </label>
          <select
            id="country"
            name="country"
            onChange={searchData}
            value={country}
          >
            <option value="">Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="ES">España</option>
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
};
