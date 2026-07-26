import "./weatherGrid.css";

// ponytail: replaces dateformat's "h:MM:ss TT"
const time = (unixSeconds) =>
  new Date(unixSeconds * 1000).toLocaleTimeString("en-US");

const WeatherGrid = (props) => {
  if (!props.weatherData?.main) return null;

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
          <td className="tg-0lax">{props.weatherData.name}</td>
          <td className="tg-0lax">{props.weatherData.weather[0].description}</td>
          <td className="tg-0lax">{props.weatherData.main.temp}c</td>
          <td className="tg-0lax">{props.weatherData.main.pressure} millibars</td>
          <td className="tg-0lax">{props.weatherData.main.humidity} %</td>
          <td className="tg-0lax">{props.weatherData.wind.speed} m/s</td>
          <td className="tg-0lax">{props.weatherData.clouds.all}%</td>
          <td className="tg-0lax">{time(props.weatherData.sys.sunrise)}</td>
          <td className="tg-0lax">{time(props.weatherData.sys.sunset)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherGrid;
