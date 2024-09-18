// import Bluebird from 'cypress/types/bluebird'
import React from 'react'



   function WeatherDisplay(props){
      const {weather} = props

      const tempStyle = {
        color : weather.temperature > 20 ? 'rgb(255, 0, 0)' : 'blue',
      };

   
  return (
    <div>
      <span>
        {/* <p style={tempStyle}>Temperature: {temperature}</p>*/}
        <p>Temperature: <span style={tempStyle}>{weather.temperature}</span></p>
      <p>condtions: {weather.condition}</p>
      </span>

    </div>
  )
}


export default WeatherDisplay
