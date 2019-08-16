import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../actions/cartActions'
import Total from './Total';
import { IState, ICartState } from '../reducers';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';


export interface ICartProps {
    // read in data from state store
    cart: ICartState,
    removeItem: (id: any) => void;
    subtractQuantity: (id: any) => void;
    addQuantity: (id: any) => void;
}


class Cart extends React.Component<any, ICartProps>{

    //to remove the item completely
    handleRemove = (id: any) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id: any) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id: any) => {
        this.props.subtractQuantity(id);
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map((item: any) => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.imgPath} alt={item.imgPath} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.name}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="fas fa-angle-up" onClick={() => { this.handleAddQuantity(item.id) }}></i></Link>
                                    <Link to="/cart"><i className="fas fa-angle-down" onClick={() => { this.handleSubtractQuantity(item.id) }}></i></Link>
                                </div>
                                <Link to="/cart">
                                    <button onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                                </Link>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart" >
                    <h5>You have ordered:</h5>
                    <ul className="collection" >
                        {addedItems}
                    </ul>
                </div>
                <Total />
            </div>
        )
    }
}


const mapStateToProps = (state: IState) => {
    return {
        items: state.cart.addedItems,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeItem: (id: any) => { dispatch(removeItem(id)) },
        addQuantity: (id: any) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id: any) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)