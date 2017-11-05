import axios from 'axios';  // a small lib that for rest, like jquery lib that also contain rest methods,
                            // but only the needed parts for rest and not ther rest from jquery

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';  //TODO this is a key from: https://gist.github.com/SebastianM/d4de7c3427883896b4b8, I did not create an account.
//note to self, do not leave http from the url, 
// leaving out http prefix will lead to attempt accessing localhost with the address,
//for example:
// GET http://localhost:8080/api.openweathermap.org/data/2.5/forecast?appid=bd5e378503939ddaee76f12ad7a97608&q=newyourk,us 404 (Not Found)
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // es6 string template syntax - again like .format in the normal universe
export const FETCH_WEATHER = 'FETCH_WEATHER'; // a const that represents the type of the action -> will be used in the action and within the reducer!

export function fetchWeather(cityString) {
    //this redux action, is also called "action creator"
    const url = `${ROOT_URL}&q=${cityString},us`;   // es6 template strings - plant the root_url and the city name in the API url for open weather
                                                    //TODO notice the "country" is static, maybe change to user provided
    const request = axios.get(url); //this is a "promise" returned from axios
    return{
        type: FETCH_WEATHER,
        payload: request    //redux-promise "middleware" will unwrap and resolve the promise and send data as the payload
                            // this is to prevent the reducer working with "unresolved" promise as it's payload
    };
}