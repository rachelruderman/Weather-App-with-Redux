import React, {Component} from 'react'


export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    //it's saying, take the existing function, bind it to this, and then replace it with that. Kind of overriding the existing function here. If you're ever passing a callback around and that function references this, you need to bind it
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  render(){
    return (
      <form className='input-group'>
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
