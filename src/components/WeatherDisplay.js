// import Bluebird from 'cypress/types/bluebird'
import React from 'react'



   function WeatherDisplay({temperature,condition}){

      const tempStyle = {
        color : temperature > 20 ? 'red' : 'Blue',
      };

   
  return (
    <div>
        <span style={tempStyle}>temperatue : {temperature}°C</span>
      <span>condtions : {condition}</span>
    </div>
  )
}


export default WeatherDisplay
