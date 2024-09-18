import React from 'react'

const WeatherDisplay = (props) => {
    const { data } = props;

    // Define style for temperature based on the temperature value
    const tempStyle = {
        color: data.temperature > 20 ? "red" : "blue"
    };

    return (
        <div>
            {/* Apply tempStyle to the temperature */}
            <p>Temperature: <span style={tempStyle}>{data.temperature}</span></p>
            <p>Conditions: {data.conditions}</p>
        </div>
    );
};

export default WeatherDisplay;


// // import Bluebird from 'cypress/types/bluebird'
// import React from 'react'



//    function WeatherDisplay(props){
//       const {weather} = props

//       const tempStyle = {
//         color : weather.temperature > 20 ? 'rgb(255, 0, 0)' : 'blue',
//       };

   
//   return (
//     <div>
//       <span>
//         {/* <p style={tempStyle}>Temperature: {temperature}</p>*/}
//         <p>Temperature: <span style={tempStyle}>{weather.temperature}</span></p>
//       <p>condtions: {weather.condition}</p>
//       </span>

//     </div>
//   )
// }


// export default WeatherDisplay
