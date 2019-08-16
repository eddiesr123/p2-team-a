import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';

export default class ItemCardComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="col-sm-12 col-md-3 col-lg-3 catalog-card">
                <div className="card card-item" >
                    <img className="card-img-top set-img-card" id="cards" src={this.props.thumbObj} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 col-md-12 no-pad col-lg-4">
                                    <span className="btn btn-outline-secondary no-pad disabled">$ {this.props.price}</span>
                                </div>
                                <div className="col-sm-4 col-md-12 no-pad col-lg-4">
                                    <a href="#" className="btn btn-outline-secondary no-pad"><i className="fas fa-plus"></i></a>
                                </div>
                                <div className="col-sm-4 col-md-12 no-pad col-lg-4">
                                    <a href="#" className="btn btn-outline-secondary no-pad" onClick={() => (this.props.updateDisplay("../" + this.props.pathToImg, this.props))}><i className="far fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}