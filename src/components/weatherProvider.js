/* eslint-disable default-case */
import React, {createContext, useContext, useReducer} from 'react'

const WeatherContext = createContext()

const WeatherProvider = ({reducer, initialState, children}) =>(
  <WeatherContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </WeatherContext.Provider>
);

const useWeatherValue = () => useContext(WeatherContext);
  
export {WeatherContext, WeatherProvider, useWeatherValue}