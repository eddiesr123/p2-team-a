import React from 'react';
import bodysuit from "../../images/alphas/bodysuit-green-female.png";
import imgMap from '../../images/items-map'

//const imgMap: any = {'../../images/alphas/bodysuit-green-female.png': require('../../images/alphas/bodysuit-green-female.png'), 
//                    '../../images/alphas/bodysuit-blue-female.png': require('../../images/alphas/bodysuit-blue-female.png')}
export class Bodysuit extends React.Component<any, any> {
    render() {
        return(
            <div className="bodysuits-div" id="bodysuit-div">
                <img className="bodysuits" id="bodysuit-green-female" width="50%" 
                    src={imgMap[this.props.suit]} alt="bodysuit" />
            </div>
        )
    }
}
