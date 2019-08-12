import React from 'react';
import mask from "../images/alphas/mask-grey-male.png";
export class Mask extends React.Component<any, any> {
    render() {
        return(
            <div className="mask-div" id="male-mask-div">
                <img className="masks" id="mask-grey-male"  width="36%"
                    src={mask} alt="Mask" />
            </div>
        )
    }
}