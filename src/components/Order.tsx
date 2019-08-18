import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { IState } from '../reducers';

class Order extends React.Component<any, any>{

    render(){
  
        return(
            <Typography variant="subtitle1">
                <Typography gutterBottom>Order: #{this.props.order.id}</Typography>
                <Typography gutterBottom>Total: ${this.props.order.total}</Typography>
                <Typography gutterBottom>Date Submitted: {this.props.order.submitted}</Typography>
                <Typography gutterBottom>We have emailed your order confirmation, and will
                send you an update when your order has shipped.</Typography>
          </Typography>
        );
    }
}

const mapStateToProps = (state: IState)=>{
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total,
        checked: state.cart.checkedBox,
        shipping: state.cart.shipping,
        payment: state.cart.payment,
        user: state.signin.user,
        loggedIn: state.signin.loggedIn,
        order: state.cart.order
    }
}


export default connect(mapStateToProps)(Order)