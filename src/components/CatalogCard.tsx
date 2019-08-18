import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import { addToCart } from '../actions/cartActions';
import { connect } from 'react-redux';
import { IState } from '../reducers';

class ItemCardComponent extends React.Component<any, any> {
    handleClick = (id:any) =>{
        this.props.addToCart(id);
    }
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
                                    <span className="btn btn-outline-secondary no-pad" onClick={() => this.handleClick(this.props.itemId)}><i className="fas fa-plus"></i></span>
                                </div>
                                <div className="col-sm-4 col-md-12 no-pad col-lg-4">
                                    <span className="btn btn-outline-secondary no-pad" onClick={() => (this.props.updateDisplay(this.props.pathToImg))}><i className="far fa-eye"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} // maps the store information (item objects) onto the properties of the component
const mapStateToProps = (state: IState) => {
    return{
        items:state.cart.items
    }
} // maps the actions (add to cart action) onto the properties of the object
const mapDispatchToProps = (dispatch: any) =>{
    return{
        addToCart: (id:any) => {dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCardComponent);
