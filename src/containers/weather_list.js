import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        // temperatureArray - use a fat arrow function (es6), 
        // go over the "weather records" in cityData.list,
        // extract only temperature.
        // const temperatureArray = cityData.list.map(weatherRecord => weatherRecord.main.temp));
        // convert kelvins to celcius with additional map+fat arrow function
        const temperatureArray = (cityData.list.map(weatherRecord => weatherRecord.main.temp)).map(tempRecord => tempRecord-273.15);
        const pressureArray = cityData.list.map(weatherRecord => weatherRecord.main.pressure);
        const humidityArray = cityData.list.map(weatherRecord => weatherRecord.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        // and the es6 sugar syntax to exctact attributes with such names from object,
        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temperatureArray} color='orange' units='C' />
                </td>
                <td>
                    <Chart data={pressureArray} color='green' units='hPa' />
                </td>
                <td>
                    <Chart data={humidityArray} color='black' units='%' />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Preasure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}

                </tbody>

            </table>
        )
    }
}

// // function mapStateToProps(state) {
// //     return {weather: state.weather} // take the weather "attribute" from redux store - application state,
// //                                     //  set a prop named "weather" that will contain the weather "attribute" from redux store
// }
// and now writing the above with the es6 syntax sugar - 
function mapStateToProps({weather}) {
    // {weather} is the same like doing:
    //  const weather = state.weather;
    return {weather};
    // the return is the same like:
    // return {weather: weather};
    
    // and this function is what allows to acces: this.props.weather within WeatherList class 
}

export default connect(mapStateToProps)(WeatherList)

