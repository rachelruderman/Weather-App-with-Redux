//remember, reducers are just functions. The first argument is always our state (which we will default to null), the second our action
export default function(state = null, action){
  console.log('action received ', action)
  return state;
}
