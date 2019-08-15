import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';

export default class ItemCardComponent extends React.Component<any, any> {
    render() {
        return ( 
        <div className="col-3 catalog-card">
        <div className="card card-item" >
            <img className="card-img-top set-img-card" id="cards" src={this.props.imgObj} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Item Name</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                price
                            </div>
                            <div className="col-4">
                                <a href="#" className="btn btn-outline-secondary"><i className="fas fa-plus"></i></a>
                            </div>
                            <div className="col-4">
                                <a href="#" className="btn btn-outline-secondary" onClick={()=>(this.props.updateDisplay("../" + this.props.pathToImg,this.props))}><i className="far fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                   
            </div>
      </div>
      </div>
        )
    }
}