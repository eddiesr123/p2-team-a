import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';

export default class ItemCardComponent extends React.Component<any, any> {
    render() {
        return ( 
        <div className="col-3">
        <div className="card card-item" >
            <img className="card-img-top set-img-card" src={this.props.imgObj} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Item Name</h5>
                <div>price</div>
                <a href="#" className="btn btn-primary"><i className="fas fa-plus"></i></a>
                <a href="#" className="btn btn-primary"><i className="far fa-eye"></i></a>
            </div>
      </div>
      </div>
        )
    }
}