import React from 'react';
import gloves from "../images/alphas/gloves-female.png";
export class Gloves extends React.Component<any, any> {
    render() {
        return(
            <div className="gloves-div" id="glovesfe-male-div">
                <img className="gloves" id="gloves-female"  width="36%"
                    src={gloves} alt="Gloves" />
            </div>
        )
    }
}