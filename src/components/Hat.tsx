import React from 'react';
import hat from "../images/alphas/fitted-fedora-hat.png";
export class Hat extends React.Component<any, any> {
    render() {
        return(
            <div className="hat-div" id="fitted-fedora-hat-div">
                <img className="hats" id="fitted-fedora-hat" z-index="1"
                    src={hat} alt="Hat" />
            </div>
        )
    }
}