import React from 'react';
import { Bodysuit } from './Bodysuit';
import { Mask } from './Mask';
import { Gloves } from './Gloves';
import  Display  from './Display';

function Browse() {
    return (
        <div className="container-fluid">{/*}
            <Bodysuit/>
            <Mask/>
            <Gloves/> 
            <table className="tables" id="display-table">
                <caption>Select Your Costume below</caption>
                <tbody>
                    <tr>
                        <td className="display-cols-1" id="display-col-1">Hello</td>
                        <td className="display-cols-2" id="display-col-2"><Display /></td>
                    </tr>
                </tbody>
            </table>*/}
            <div className="row">
                <div className="col-sm-9 col-md-9" id="left-col">Hello</div>
                <div className="col-sm-3 col-md-3" id="right-col"><Display/></div>

            </div>
        </div>  
    )
}

export default Browse;