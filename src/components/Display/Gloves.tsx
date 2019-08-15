import React from 'react';
import imgMap from '../../images/items-map'

export class Gloves extends React.Component<any, any> {
    render() {
        return(
            <div className="gloves-div" id="gloves-female-div">
                <img className="gloves" id="gloves-female"  width="100%"
                    src={imgMap[this.props.gloves]} alt="gloves" />
            </div>
        )
    }
}