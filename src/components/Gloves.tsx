import React from 'react';
import gloves from "../images/alphas/gloves-male.png";
export class Gloves extends React.Component<any, any> {
    render() {
        return(
            <div className="gloves-div" id="gloves-male-div">
                <img className="gloves" id="gloves-male"  width="14%"
                    src={gloves} alt="Gloves" />
            </div>
        )
    }
}