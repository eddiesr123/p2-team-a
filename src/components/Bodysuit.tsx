import React from 'react';
import bodysuit from "../images/alphas/bodysuit-green-female.png";
export class Bodysuit extends React.Component<any, any> {
    render() {
        return(
            <div className="bodysuit-div" id="bodysuit-div">
                <img className="bodysuits" id="bodysuit-green-female" width="36%" 
                    src={bodysuit} alt="bodysuit" />
            </div>
        )
    }
}
