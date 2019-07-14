import React from 'react';
import {useWeatherValue} from './weatherProvider'
import isEmpty from 'lodash/isEmpty'
import dateFormat from 'dateformat'
import './weatherGrid.css';

const WeatherGrid = () => {
    const [{weatherData}] = useWeatherValue();

    if(isEmpty(weatherData)) return null;
    console.log('abc', new Date(weatherData.sys.sunrise))
    return(
        <div className="parent">
            <div className="item div1">Weather Description</div>
            <div className="item div2">{weatherData.weather[0].description}</div>
            <div className="item div3">Temperature</div>
            <div className="item div4">{weatherData.main.temp}c</div>
            <div className="item div5">Pressure</div>
            <div className="item div6">{weatherData.main.pressure} millibars</div>
            <div className="item div7">Humidity</div>
            <div className="item div8">{weatherData.main.humidity} %</div>
            <div className="item div9">Wind Speed</div>
            <div className="item div10">{weatherData.wind.speed} m/s</div>
            <div className="item div11">Cloud Cover %</div>
            <div className="item div12">{weatherData.clouds.all}</div>
            <div className="item div13">Location</div>
            <div className="item div14">{weatherData.name}</div>
            <div className="item div15">Sunset</div>
            <div className="item div16">{dateFormat(new Date(weatherData.sys.sunset*1000), "h:MM:ss TT").toString()}</div>
            <div className="item div17">Sunrise</div>
            <div className="item div18">{dateFormat(new Date(weatherData.sys.sunrise*1000), "h:MM:ss TT").toString()}</div>
            <div className="item div19">Weather Icon</div>
            <div className="item div20">tbd</div>
        </div>
    )
}

export default WeatherGrid;