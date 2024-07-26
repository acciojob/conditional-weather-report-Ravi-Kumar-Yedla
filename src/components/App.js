
import React, { useEffect,useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";



function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Simulate fetching weather data
    setWeather({ temperature: 25, conditions: 'Sunny' });
  },[])
  return (
    <div>
      <h1>Weather Application</h1>
      <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions}/>
      
    </div>
  );
}
export default App
