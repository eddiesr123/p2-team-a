import React from 'react';
import mask from "../../images/alphas/mask-green-female.png";

const imgMap: any = {'../../images/alphas/mask-black-female.png': require('../../images/alphas/mask-black-female.png'),
                    '../../images/alphas/mask-blue-female.png': require('../../images/alphas/mask-blue-female.png'),
                    '../../images/alphas/mask-green-female.png': require('../../images/alphas/mask-green-female.png')}

export class Mask extends React.Component<any, any> {
    render() {
        return(
            <div className="mask-div" id="mask-female-div">
                <img className="masks" id="mask-green-female"  width="36%"
                    //src={require(this.props.mask)} alt="mask" />
                    //src={require('../../images/alphas/mask-green-female.png')} alt="mask" />
                    src= {imgMap[this.props.mask]} alt="mask" />
            </div>
        )
    }
} 