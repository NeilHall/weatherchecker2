import { expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import App from "./App";
import WeatherGrid from "./components/weatherGrid";

// ponytail: server render, no jsdom needed for a smoke test
it("renders without crashing", () => {
  expect(renderToString(<App />)).toContain("Get the Weather");
});

it("renders nothing until weather data arrives", () => {
  expect(renderToString(<WeatherGrid weatherData={null} />)).toBe("");
  expect(renderToString(<WeatherGrid weatherData={{ cod: "400" }} />)).toBe("");
});

it("formats sunrise and sunset", () => {
  const html = renderToString(
    <WeatherGrid
      weatherData={{
        name: "Belfast",
        weather: [{ description: "rain" }],
        main: { temp: 9, pressure: 1004, humidity: 88 },
        wind: { speed: 5 },
        clouds: { all: 90 },
        sys: { sunrise: 1600000000, sunset: 1600040000 },
      }}
    />
  );
  expect(html).toContain("Belfast");
  expect(html).toMatch(/\d{1,2}:\d{2}:\d{2}\s?(AM|PM)/);
});
