import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IState } from '../reducers';
import { Link } from "react-router-dom";
//import { addShipping } from './actions/cartActions'


export class Total extends React.Component<any>{
    
    componentWillUnmount() {
         if(this.refs.shipping) //.checked??
              this.props.substractShipping()
    }

    handleChecked = (e: any)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link style={{textShadow:"1.5px 1.5px 0 #000"}}className="nav-link" to="/checkout" id="navbar-cart-btn">Checkout</Link> 
                            </li>
                        </ul>  
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state: IState)=>{
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch: any)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)
