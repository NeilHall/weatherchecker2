// eslint-disable-next-line no-unused-vars
import React, {useState, } from 'react';

const GetWeatherForLocation = async (latitude, longitude) => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=APP_ID&units=metric&mode=json')
    let data = await response.json();
    console.log(data);
    return data;
}

export default GetWeatherForLocation;