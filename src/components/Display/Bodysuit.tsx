import React from 'react';
import bodysuit from "../../images/alphas/bodysuit-green-female.png";
export class Bodysuit extends React.Component<any, any> {
    render() {
        return(
            <div className="bodysuits-div" id="bodysuit-div">
                <img className="bodysuits" id="bodysuit-green-female" width="36%" 
                    src={require(this.props.suit)} alt="bodysuit" />
            </div>
        )
    }
}
