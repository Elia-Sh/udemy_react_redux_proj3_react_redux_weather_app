import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action) {
    //state=[] meants that the default value of this peice of app state empty array,
    // state provided to the reducer is the part of the "application" state,
    // that the reducer is responsible for
    switch(action.type) {
        case FETCH_WEATHER:
        // return state.push(action.payload.data);  // colect cities over time -> bad!!
                                                    // do not mutate state "in place" for example push manipulates the array; state="bla bla new thing"
        // return state.concat([action.payload.data]); // concat will not manipulate that state, it will return a !new instance of state!
        // the concat is "simplified" with es6 syntax sugar - 
        return [action.payload.data, ...state];
        // this will result in: [city, city, city]
        // and !NOT! [ city, [city, city, city] ]
        // documented under: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
        // explained in: https://www.udemy.com/react-redux/learn/v4/t/lecture/4284604
    }

    return state;
}