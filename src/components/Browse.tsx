import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
import PaginationComponent from './Pagination.component';
import ItemCardComponent from './CatalogCard';
import { Bodysuit } from './Bodysuit';
import { Mask } from './Mask';
import { Gloves } from './Gloves';
import  Display  from './Display';
import Catalog from './Catalog';
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
                <div className="col-sm-8 col-md-8" id="left-col"><Catalog></Catalog></div>
                <div className="col-sm-4 col-md-4" id="right-col"><Display/></div>

            </div>
        </div>  
    )
}

export default Browse;