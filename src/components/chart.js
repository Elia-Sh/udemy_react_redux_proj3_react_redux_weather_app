import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function getAverage(dataArray) {
    return _.round(_.sum(dataArray)/dataArray.length);

}

// no need to interact with state - no component state and no interaction with application state,
// so we are making a function component - stateless
export default (props) => {
    return (
        <div>
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>
                {getAverage(props.data)} {props.units}
            </div>
        </div>
    )
}
