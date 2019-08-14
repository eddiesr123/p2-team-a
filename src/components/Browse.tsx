import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
import PaginationComponent from './Pagination.component';
import CatalogCard from './CatalogCard';
import { Bodysuit } from './Display/Bodysuit';
import { Mask } from './Display/Mask';
import { Gloves } from './Display/Gloves';
import  Display  from './Display/Display';
import Catalog from './Catalog';
function Browse() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8 col-md-8" id="left-col"><Catalog></Catalog></div>
                <div className="col-sm-4 col-md-4" id="right-col"><Display/></div>

            </div>
        </div>  
    )
}

export default Browse;