import React from 'react';
import WeatherForm from './components/weatherForm'
import {WeatherProvider} from './components/weatherProvider'
import './App.css';

const App = () => {
  const initialState = { weatherData: {} };
  
  const reducer =  (state, action) => {
    switch (action.type) {
      case 'updateWeather':
        return {
          ...state,
          weatherData:  action.newWeather,
        };
      default: return state;
    }
  };

  return(
    <WeatherProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <h1>Get the Weather for Anywhere!</h1>
        </header>
        <WeatherForm />
      </div>
      </WeatherProvider>
  )
}

export default App;
