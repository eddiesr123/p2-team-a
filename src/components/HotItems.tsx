import React from 'react';
import { connect } from 'react-redux';
import { addToCart, getProducts } from '../actions/cartActions';
import { IState } from '../reducers';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class HotItems extends React.Component<any> {

  handleClick = (id: any) => {
    this.props.addToCart(id);
  }

  componentDidMount() {
    if (!this.props.stateCheck) {
      const url = `http://localhost:8080/items/`;
      Axios.get(url).then(payload => {
        console.log(payload);

        const items = payload.data.map((item: any) => {
          return item;
        });
        console.log(items);
        this.props.getProducts(items.slice(0, 6));
      })
    }
  }

  render() {
    console.log(this.props.items);
    let itemList = this.props.items.map((item: any) => {
      return (
        <div
          className="card hot-card"
          style={{ alignItems: "center" }}
          key={item.id}
        >
          <div id="hot-card-div">
            <Avatar
              src={item.img}
              alt={item.name}
              style={{ margin: 10, width: 100, height: 100 }}
            />
            <div>
              <Link to="/hot">
                <Button
                  id="hot-card-button"
                  variant="dark"
                  onClick={() => this.handleClick(item.id)}
                >add
                  </Button>
              </Link>
            </div>
          </div>

          <div className="hot-card-content">
            <span className="card-title">{item.name}</span><br />
            {`Price: ${item.price}`}
            <br />
            {`Quantity: ${item.quantity || 0}`}
            <br />
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
          {itemList}
        </div>
      </div>
    )

  }
}
const mapStateToProps = (state: IState) => {
  return {
    items: state.cart.items,
    stateCheck: state.cart.stateCheck
  }
}


const mapDispatchToProps = (dispatch: any) => {

  return {
    addToCart: (id: any) => { dispatch(addToCart(id)) },
    getProducts: (items: any) => { dispatch(getProducts(items)) }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(HotItems);
