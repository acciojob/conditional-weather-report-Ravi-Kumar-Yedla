// import Bluebird from 'cypress/types/bluebird'
import React from 'react'



   function WeatherDisplay({temperature,condition}){

      const tempStyle = {
        color : temperature > 20 ? 'rgb(255, 0, 0)' : 'blue',
      };

   
  return (
    <div>
      <div>
        <p style={tempStyle}>Temperature: {temperature}</p>
        <p>Conditions: {condition}</p>
      </div>
    </div>
  )
}


export default WeatherDisplay
