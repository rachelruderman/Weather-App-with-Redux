import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng 
      }
    })
  }

  render(){
    //this makes use of the ref system in react. it allows us to get a direct reference to the html element on the screen by referring to this.refs.map
    return <div ref='map' />
  }
}

export default GoogleMap
