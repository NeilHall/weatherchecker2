import React from 'react';
import GetWeatherForLocation from './weather'
import CoordinateInput from './coordinateInput'
import WeatherGrid from './weatherGrid'
import './weatherForm.css';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "54.597",
      longitude: "-5.9301",
      weatherData: null
    };
    this.handleLatitude = this.handleLatitude.bind(this);
    this.handleLongitude = this.handleLongitude.bind(this);
  }

  handleLatitude(event){
    this.setState({latitude: event.target.value})
  }

  handleLongitude(event){
    this.setState({longitude: event.target.value})
  }

  render() {
    return (
      <>
        <div className="weatherForm">
          <CoordinateInput coordType="latitude" coordinate={this.state.latitude} onChange={this.handleLatitude} />
          <CoordinateInput coordType="longitude" coordinate={this.state.longitude} onChange={this.handleLongitude} />
          
          <button
            onClick={ 
              async () =>  this.setState({
                weatherData:await GetWeatherForLocation(this.state.latitude, this.state.longitude)
              })
            } 
            id="submitBtn"
          > 
            Submit
          </button>
        </div>
        <WeatherGrid weatherData={this.state.weatherData} />
      </>
    );
  }
}

export default WeatherForm;