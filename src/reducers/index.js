import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer // "weather" is the part of the "application state" that is provided by WeatherReducer
});

export default rootReducer;
