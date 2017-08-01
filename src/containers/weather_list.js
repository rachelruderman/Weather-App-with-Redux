import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData){
    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  //{weather} same as state.weather
  return {weather}
  //whenever we have a key/value that are identical, we can shrink it to one word
}

export default connect(mapStateToProps)(WeatherList)
