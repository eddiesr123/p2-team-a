import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addQuantity, getProducts } from '../actions/cartActions';
import { IState, ICartState } from '../reducers';
import { Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';


 class HotItems extends React.Component<any>{


    handleClick = (id: any)=>{
        this.props.addToCart(id);
    }



    componentDidMount() {
        if(!this.props.stateCheck) {
        const url = `http://localhost:8080/items/`;
        Axios.get(url).then(payload => {
            console.log(payload);

            const items = payload.data.map((item: any) => {
                return item;
            });
            console.log(items);
            this.props.getProducts(items.slice(0,6));
            
        })
        }
    }





    render(){
        let itemList = this.props.items.map((item: any) => {
            return(
                <div className="card hot-card" style={{alignItems: "center"}} key={item.id}>
                        <div >
                            <div className="item-img">
                            <img src={item.imgPath} alt={item.name} style={{margin: 10, width: 100, height: 125,}}/>
                            </div>
                            <span className="card-title">{item.name}</span>
                            <Link to="/">
                                <Button variant="dark" onClick={()=>{this.handleClick(item.id)}}><i>add</i></Button>
                            </Link>
                        </div>

                        <div className="card-content">
                            {/*<p>{item.clothingType}</p>*/}
                            <p><b>Price: {item.price}$</b></p>
                            <p><b>Quantity: {item.quantity}</b></p>
                        </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: IState)=>{
    return{
      items: state.cart.items,
      stateCheck: state.cart.stateCheck
    }
  }

  const mapDispatchToProps= (dispatch: any)=>{
    
    return{
        addToCart: (id: any)=>{dispatch(addToCart(id))},
        getProducts: (items: any)=>{dispatch(getProducts(items))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotItems)