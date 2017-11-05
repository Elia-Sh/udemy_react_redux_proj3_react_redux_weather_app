import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};    //term holds the "search term"
        //bind the fucntion to be familiar with "this",
        // when this.onInputChange will be called, 
        // the "this" inside the function will refer to the instance of SearchBar
        // "bind the context"
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(eventObject){
        // eventObject is a JS vanila event object passed when event occurs
        this.setState({term: eventObject.target.value});
    }

    // form html elemnt notes - 
    // * user press enter when focused on !input field that is a child of a form element in the DOM! -> this triggers "submit" event
    // * same for a button of type submit - button is a child of a form, triggers submit event
    // this is why "onSubmit" is defined on the level of the form element and !not! "submit" button 

    onFormSubmit(eventObject){
        eventObject.preventDefault();   // don't submit the form, do the content of function instead
        // call the action creator that makes API request..
        this.props.fetchWeather(this.state.term);   // call the action creator with the "city"
        this.setState({term: ''});

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder='Get a five-day forecase in your favorite cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>

            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    // this part allows the component-container, 
    // to call the redux-action: fetchWeather
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
                    //  ^^ we pass null because we don't pass: mapStateToProps to connect method.