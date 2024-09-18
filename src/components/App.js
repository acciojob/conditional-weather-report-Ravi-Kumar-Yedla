
import React, { useEffect, useState } from "react";
import './../styles/App.css';
// import WeatherDisplay from "./WeatherDisplay";
import WeatherDisplay from "./weatherDisplay";


const def = {temperature : 0, conditions : "Cool"}

const App = () => {

  const[data, setData] = useState(def)


  useEffect(() => {
    setTimeout(() => {
      setData({ temperature: 25, conditions: "Sunny" })
    }, 1000)
  })

  return (
    <div>
      <WeatherDisplay data={data} />
    </div>
  )
}

export default App


// import React, { useEffect,useState} from "react";
// import './../styles/App.css';
// // import WeatherDisplay from "./WeatherDisplay";
// import WeatherDisplay from "./weatherDisplay";
// import { getImportCode } from "css-loader/dist/utils";



// function App() {
//   const [weather, setWeather] = useState({ temperature: 0, conditions: '' });
// getImportCode
//   useEffect(() => {
   
//     setWeather({ temperature: 25, conditions: 'Sunny' });
//   },[])

//   return (
//     <div>
//       <h1>Weather Application</h1>
//       {/* <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions}/> */}
//      <WeatherDisplay weather = {weather} />
      
//     </div>
//   );
// }
// export default App
