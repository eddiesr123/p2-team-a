import React from 'react';
import bodysuit from "../images/alphas/bodysuit-grey-male.png";
export class Bodysuit extends React.Component<any, any> {
    render() {
        return(
            <div className="bodysuit-div" id="grey-bodysuit-div">
                <img className="bodysuits" id="bodysuit-grey-male" width="36%" 
                    src={bodysuit} alt="grey bodysuit" />
            </div>
        )
    }
}
