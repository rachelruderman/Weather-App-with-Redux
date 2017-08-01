import React, {Component} from 'react';

class GoogleMap extends Component {

  componentDidMount(){
    //this is how we create an embedded google map
    //it takes an html element as the first argument, and then renders an embedded map into it
    //this is generally how we make 3rd party libraries work nicely with React
    new google.maps.Map(this.refs.map, {
      //zoom of 12 is about the screen width of a city
      zoom: 12,
      //this tells google maps where we want to center the map on
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render(){
    //this makes use of the ref system in react. it allows us to get a direct reference to the html element on the screen by referring to this.refs.map
    return <div ref='map' />
  }
}

export default GoogleMap
