import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
import PaginationComponent from './Pagination.component';
import ItemCardComponent from './item.card.component';
function BrowseTab() {
    return <div className="container card-container">
    <div className="row" >
        <div className="col p-12">
            <div className="card mt-5 tab-card">
              <div className="card-header tab-card-header">
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true"><i className="fab fa-redhat"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false"><i className="fas fa-mask"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false"><i className="fas fa-tshirt"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="Four" aria-selected="false"><i className="fas fa-archway"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="five-tab" data-toggle="tab" href="#five" role="tab" aria-controls="Five" aria-selected="false"><i className="fas fa-shoe-prints"></i></a>
                    </li>
                </ul>
            </div>
      
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-5" id="one" role="tabpanel" aria-labelledby="one-tab">
                    <h5 className="card-title">hats n' such</h5>
                    
                    <ItemCardComponent/><ItemCardComponent/><ItemCardComponent/><ItemCardComponent/><ItemCardComponent/>
                    <PaginationComponent/>             
                </div>
                <div className="tab-pane fade p-5" id="two" role="tabpanel" aria-labelledby="two-tab">
                    <h5 className="card-title">Masks n' things</h5>
                    <p className="card-text">Masks Masks Masks Masks Masks Masks Masks Masks Masks Masks Masks Masks Masks </p>
                    <PaginationComponent/>               
                </div>
                <div className="tab-pane fade p-5" id="three" role="tabpanel" aria-labelledby="three-tab">
                    <h5 className="card-title">Torso</h5>
                    <p className="card-text">torso things</p>
                    <PaginationComponent/>           
                </div>
                <div className="tab-pane fade p-5" id="four" role="tabpanel" aria-labelledby="four-tab">
                    <h5 className="card-title">Tab Card four</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <PaginationComponent/>               
                </div>
                <div className="tab-pane fade p-5" id="five" role="tabpanel" aria-labelledby="five-tab">
                    <h5 className="card-title">Tab Card five</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <PaginationComponent/>      
                </div>
            </div>
        </div>
    </div>
</div>
</div>;
}

export default BrowseTab;