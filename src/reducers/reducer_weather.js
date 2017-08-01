import {FETCH_WEATHER} from '../actions/index'
//remember, reducers are just functions. The first argument is always our state (which we will default to null), the second our action
export default function(state = [], action){
  switch (action.type) {
  case FETCH_WEATHER:
  //we can never manipulate state directly; so we could never do state.push(action.payload.data). Inside of reducers, we don't mutate our state; we return a completely fresh state, so we need a new array entirely that includes the old weather data and the new one. We aren't mutating our state; we're returning a new version of our state
  //one way around this would be to return state.concat([action.payload.data])
  //but in ES6, we can say
    return [ action.payload.data, ...state ];
    //this says, in an array, put action.payload.data inside of it, and then take this other variable, which, b/c of these 3 dots, says this might be an array, so take all the entries inside of it and insert it into this new outside array. Results in a 1-D array
  }
  return state;
}
