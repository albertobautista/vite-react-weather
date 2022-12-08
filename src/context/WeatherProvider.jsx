import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
const WeatherContext = createContext();
const WeatherProvider = ({ children }) => {
  //   console.log(import.meta.env.VITE_API_KEY);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState("");
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const searchData = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const getWeather = async (myData) => {
    setLoading(true);
    setNoResult("");

    try {
      const { city, country } = myData;

      const appId = import.meta.env.VITE_API_KEY;

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      const { lat, lon } = data[0];
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: weather } = await axios(urlWeather);
      console.log(weather);
      setResult(weather);
    } catch (error) {
      console.log("Error", error.message);
      setNoResult("No hay resultados");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ search, searchData, getWeather, result, loading, noResult }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
