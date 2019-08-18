import React from 'react';
import { connect } from 'react-redux';
import { resetState, getOrder } from '../../actions/cartActions';
import { IState } from '../../reducers';
import { Button } from '@material-ui/core';
import Axios from 'axios';

class Submit extends React.Component<any,any>{
    constructor(props: any){
        super(props);

        this.state= {
            submitted: new Date(),
            total: this.props.total,
            user:0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.loggedIn) {
            this.setState({
                ...this.state,
                user: this.props.user.myUser.id
            })
        }
    }
      async handleClick() {
    
        //const jwt = getJwt();
        //const id = getUserId();
        //const role = getRole();
        //const headers = { "Authorization": jwt, 'Content-Type': 'application/json' }
        const url= `http://localhost:8080/orders/`;
    
        const order = {
          submitted: this.state.submitted,
          total: this.state.total,
          user: this.state.user
        }
        console.log(order);
    
        const response = await Axios({
          method: "post",
          url: url,
          data: order
        })
        this.props.resetState();
        this.props.getOrder(response.data);
        
        this.setState({
            ...this.state,
            id: response.data.id,
            submitted: response.data.submitted,
            total: response.data.total,
            user: response.data.user
      })
   
      }

    render(){
  
        return(
                <Button style={{WebkitTextFillColor:"white"}} onClick={this.handleClick}>Place order</Button>
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
        loggedIn: state.signin.loggedIn
    }
}

const mapDispatchToProps = (dispatch: any)=>{

    return{
        resetState: () => {dispatch(resetState())},
        getOrder: (order: any) => {dispatch(getOrder(order))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Submit)