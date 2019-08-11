import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
import PaginationComponent from './Pagination.component';
import ItemCardComponent from './item.card.component';
import BrowseTabComponent from './browse.tab.component';
import { Bodysuit } from './Bodysuit';
import { Mask } from './Mask';
import { Gloves } from './Gloves';
function Browse() {
    return <div><BrowseTabComponent></BrowseTabComponent></div>;
/*
function Browse() {
    return (
        <div>
            <Bodysuit/>
            <Mask/>
            <Gloves/>
        </div>  
    )
*/
}

export default Browse;