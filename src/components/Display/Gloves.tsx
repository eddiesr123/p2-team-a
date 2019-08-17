import React from 'react';

//import gloves from "../../images/alphas/gloves-female.png";
const imgMap: any = {'../../images/alphas/gloves-female.png': require('../../images/alphas/gloves-female.png'),
                     '../../images/defaults/empty-female-gloves.png': require('../../images/defaults/empty-female-gloves.png')}

export class Gloves extends React.Component<any, any> {
    render() {
        return(
            <div className="gloves-div" id="gloves-female-div">
                <img className="gloves" id="gloves-female" 
                    src={imgMap[this.props.gloves] || this.props.gloves} alt="gloves" />
            </div>
        )
    }
}//hello