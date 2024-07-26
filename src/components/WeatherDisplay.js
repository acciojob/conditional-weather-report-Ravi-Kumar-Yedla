// import Bluebird from 'cypress/types/bluebird'
import React from 'react'



   function WeatherDisplay({temperature,condition}){

      const tempStyle = {
        color : temperature > 20 ? 'red' : 'Blue',
      };

   
  return (
    <div>
      <span>
        <p style={tempStyle}>Temperature: {temperature}</p>
      <p>condtions: {condition}</p>
      </span>

    </div>
  )
}


export default WeatherDisplay
