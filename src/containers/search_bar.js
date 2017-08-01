import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index.js'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    //it's saying, take the existing function, bind it to this, and then replace it with that. Kind of overriding the existing function here. If you're ever passing a callback around and that function references this, you need to bind it
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    //this just tells the browser, don't send an http request to the server
    event.preventDefault()
    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render(){
    return (
      //submitting an html form element will automatically make a request to the server
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          //the input's value is coming from the state
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}


//this makes sure that the dispatch flows down into the middleware and into the reducers
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}
//the only reason we're passing null in here is because whenever we're passing in a function to map the dispatch to the props of our container, it goes as the second argument. By passing in null, it's saying, 'hey, I understand that redux is maintaining some state, but this container doesn't care about it at all. Thanks, but, we don't need any state here'
export default connect(null, mapDispatchToProps)(SearchBar)
