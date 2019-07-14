import React, {useState} from 'react';
import GetWeatherForLocation from './weather'
import {useWeatherValue} from './weatherProvider'
import CoordinateInput from './coordinateInput'
import WeatherGrid from './weatherGrid'
import './weatherForm.css';

function WeatherForm () {
    const [{weatherData}, dispatch] = useWeatherValue();
    const [longitude, setLongitude] = useState("-5.9301");
    const [latitude, setLatitude] = useState("54.597");
    const handleLongitude = (e) => {setLongitude(e.target.value)}
    const handleLatitude = (e) => {setLatitude(e.target.value)}

    return (
      <>
        <div className="weatherForm">
          <CoordinateInput coordType="latitude" coordinate={latitude} handleCoordinate={handleLatitude} />
          <CoordinateInput coordType="longitude" coordinate={longitude} handleCoordinate={handleLongitude} />
          
          <button
            onClick={ async () => dispatch({
                    type: 'updateWeather',
                    newWeather: await GetWeatherForLocation(latitude, longitude)
                })
            }
            id="submitBtn"
          >
            Submit
          </button>
        </div>
        <WeatherGrid weatherData={weatherData} />
      </>
    );
}

export default WeatherForm;