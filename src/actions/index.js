const API_KEY = 'f71fbe87810db2535827de0bc979a984';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
//safer to assign variables
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  //remember, action creators always have to return an action, and an action is an object which always has to have a type
  return {
    type: FETCH_WEATHER
  }
}
