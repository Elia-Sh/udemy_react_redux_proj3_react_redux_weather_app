import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }

        });
    }
    // <div ref='map' meants that from anywhere in we can use: this.refs.map
    // and this will get the reference to this "div" html element
    render(){
        return <div ref='map'>
            </div>
    }
}

export default GoogleMap;
