import React from 'react';
import bodysuit from "../images/alphas/grey-male-bodysuit.png";
export class Bodysuit extends React.Component<any, any> {
    render() {
        return(
            <div className="bodysuit-div" id="grey-bodysuit-div">
                <img className="bodysuits" id="grey-male-bodysuit" width="36%" 
                    src={bodysuit} alt="grey bodysuit" />
            </div>
        )
    }
}
