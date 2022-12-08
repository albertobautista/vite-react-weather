import React from "react";
import useWeather from "../hooks/useWeather";

export const Result = () => {
  const { result } = useWeather();
  const { name, main } = result;

  const kelvin = 273.15;
  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es:</h2>
      <p>
        {parseInt(main.temp - kelvin)}
        <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Mínima : {parseInt(main.temp_min - kelvin)}
          <span>&#x2103;</span>
        </p>
        <p>
          Máxima : {parseInt(main.temp_max - kelvin)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
