import React from 'react';
import mask from "../images/alphas/male-mask-grey.png";
export class Mask extends React.Component<any, any> {
    render() {
        return(
            <div className="mask-div" id="male-mask-div">
                <img className="masks" id="male-mask-grey"  width="36%"
                    src={mask} alt="Mask" />
            </div>
        )
    }
}