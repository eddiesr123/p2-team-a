import React from 'react';

const imgMap: any = {'../../images/alphas/mask-black-female.png': require('../../images/alphas/mask-black-female.png'),
                    '../../images/alphas/mask-blue-female.png': require('../../images/alphas/mask-blue-female.png'),
                    '../../images/alphas/mask-green-female.png': require('../../images/alphas/mask-green-female.png'),
                    '../../images/defaults/empty-female-mask.png': require('../../images/defaults/empty-female-mask.png'),
                    '../../images/alphas/mask-red-female.png': require('../../images/alphas/mask-red-female.png')}

export class Mask extends React.Component<any, any> {
    render() {
        return(
            <div className="mask-div" id="mask-female-div">
                <img className="masks" id="mask-green-female"  
                    //src={require(this.props.mask)} alt="mask" />
                    //src={require('../../images/alphas/mask-green-female.png')} alt="mask" />
                    src= {imgMap[this.props.mask]} alt="mask" />
            </div>
        )
    }
} 