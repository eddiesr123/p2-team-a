import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { IState, ICartState } from '../reducers';
import Button from 'react-bootstrap/Button'
import { Avatar } from '@material-ui/core';

 export class HotItems extends React.Component<any>{


    handleClick = (id: any)=>{
        this.props.addToCart(id); 
        console.log(this.props.items)
    }

    render(){
        let itemList = this.props.items.map((item: any) => {
            return(
                <div className="card" style={{alignItems: "center"}} key={item.id}>
                        <div >
                            <Avatar src={item.img} alt={item.title} style={{margin: 10, width: 100, height: 100,}}/>
                            <span className="card-title">{item.title}</span>
                            <Button itemRef="/hot" variant="dark" onClick={()=>{this.handleClick(item.id)}}><i>add</i></Button>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
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
      items: state.cart.items
      //items: state.items
    }
  }

  const mapDispatchToProps= (dispatch: any)=>{
    
    return{
        addToCart: (id: any)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotItems)