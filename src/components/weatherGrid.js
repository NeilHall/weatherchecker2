import React from "react";
import { useWeatherValue } from "./weatherProvider";
import isEmpty from "lodash/isEmpty";
import dateFormat from "dateformat";
import "./weatherGrid.css";

const WeatherGrid = () => {
  const [{ weatherData }] = useWeatherValue();

  if (isEmpty(weatherData)) return null;

  console.log(weatherData);
  return (
    <table className="tg">
      <tbody>
        <tr>
          <th className="tg-0lax">Location</th>
          <th className="tg-0lax">Weather Description</th>
          <th className="tg-0lax">Temperature</th>
          <th className="tg-0lax">Pressure</th>
          <th className="tg-0lax">Humidity</th>
          <th className="tg-0lax">Wind Speed</th>
          <th className="tg-0lax">Cloud Cover</th>
          <th className="tg-0lax">Sunrise</th>
          <th className="tg-0lax">Sunset</th>
        </tr>
        <tr>
          <td className="tg-0lax">{weatherData.name}</td>
          <td className="tg-0lax">{weatherData.weather[0].description}</td>
          <td className="tg-0lax">{weatherData.main.temp}c</td>
          <td className="tg-0lax">{weatherData.main.pressure} millibars</td>
          <td className="tg-0lax">{weatherData.main.humidity} %</td>
          <td className="tg-0lax">{weatherData.wind.speed} m/s</td>
          <td className="tg-0lax">{weatherData.clouds.all}%</td>
          <td className="tg-0lax">
            {dateFormat(
              new Date(weatherData.sys.sunrise * 1000),
              "h:MM:ss TT"
            ).toString()}
          </td>
          <td className="tg-0lax">
            {dateFormat(
              new Date(weatherData.sys.sunset * 1000),
              "h:MM:ss TT"
            ).toString()}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherGrid;
