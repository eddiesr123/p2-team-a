import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { IState } from '../reducers';

 export class HotItems extends React.Component<any>{
    
    handleClick = (id: any)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList: any = this.props.items.map((item: any)=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <a href="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></a>
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
    return {
      items: state.cart.items
    }
  }
const mapDispatchToProps= (dispatch: any)=>{
    
    return{
        addToCart: (id: any)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotItems)