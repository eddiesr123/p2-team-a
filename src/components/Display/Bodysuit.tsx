import React from 'react';
import bodysuit from "../../images/alphas/bodysuit-green-female.png";

const imgMap: any = {'../../images/alphas/bodysuit-green-female.png': require('../../images/alphas/bodysuit-green-female.png'), 
                    '../../images/alphas/bodysuit-blue-female.png': require('../../images/alphas/bodysuit-blue-female.png'),
                    '../../images/alphas/bodysuit-black-female.png': require('../../images/alphas/bodysuit-black-female.png'),
                    '../../images/alphas/bodysuit-red-female.png': require('../../images/alphas/bodysuit-red-female.png')}
export class Bodysuit extends React.Component<any, any> {
    render() {
        return(
            <div className="bodysuits-div" id="bodysuit-div">
                <img className="bodysuits" id="bodysuit-green-female" width="36%" 
                    src={imgMap[this.props.suit]} alt="bodysuit" />
            </div>
        )
    }
}
