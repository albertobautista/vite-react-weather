import AppWeather from "./components/AppWeather";
import { WeatherProvider } from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de clima</h1>
      </header>
      <AppWeather />;
    </WeatherProvider>
  );
}

export default App;
