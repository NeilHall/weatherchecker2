import React from "react";
import WeatherForm from "./components/weatherForm";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>Get the Weather for Anywhere!</h1>
          </header>
          <WeatherForm />
        </div>
        <br />
        <div className="cities">
          <pre>Try:-
          <p>London  51.5074 / 0.1278</p>
          <p>Paris  48.8566 / 2.3522</p>
          <p>New York  40.7128 / -74.0060</p>
          <p>Beijing  39.9075 / 116.39723</p>
          <p>Tokyo  35.6895 / 139.69171</p>
          </pre>
        </div>
      </>
    );
  }
}

export default App;
