import React from "react";
import { Link } from "react-router-dom";
import { INavbarState, IState } from '../reducers'
import { updateCartCount } from '../actions/navbar.actions'
import { connect } from "react-redux"
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import Logout from "./Logout";

export interface INavbarProps { 
  // read in data from state store
  navbar: INavbarState,
  updateCartCount: (amount:number) => void;
}


///For shopping cart icon: <i class="fas fa-shopping-cart"></i>
export class Navbar extends React.Component<any, INavbarState> {
  
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" role="navigation">
          <button className = "navbar-toggler navbar-toggler-right" type = "button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

            <Link className="navbar-brand" to="/" id="mainTitle">
              COSTUMES Of DOOM!
            </Link>

            {/* Collapsible content */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
              {/*links */}
              <ul className="navbar-nav mr-auto">
                <li className="divider-vertical nav-item" />
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"> 
                  <Link className="nav-link" to="/" id="navbar-home-btn" >Home</Link>
                </li>
                <li className="divider-vertical nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"/>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/browse" >Browse</Link>
                </li>
              </ul>
              <ul className="navbar-nav">  
                <li className="divider-vertical nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"/>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                {!this.props.signin.loggedIn ?
                  <Link className="nav-link" to="/register" >Sign up</Link>
                  :
                  <Link className="nav-link" to="/userinfo" >{this.props.signin.user.username} </Link>
                }
                </li>
                <li className="divider-vertical nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"/>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                {!this.props.signin.loggedIn ?
                  <Link className="nav-link" to="/login" >Sign in</Link>
                  :
                  <Logout />
                }
                </li>
                <li className="divider-vertical nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"/>
                <li data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/cart" id="navbar-cart-link">
                    <i className="fas fa-shopping-cart" id="navbar-cart-icon">
                      <span className="icons" id="text-for-shoppingcart">{this.props.total}</span>
                    </i>
                  </Link> 
                </li> 
              </ul>            
            </div>
        </nav>  
    );
  }
}

// read state-store values into state-component values
const mapStateToProps = (state: IState) => {
  return {
    navbar: state.navbar,
    addedItems: state.cart.addedItems,
    total: state.cart.totalItems,
    signin: state.signin
  }
}

const mapDispatchToProps = {
  updateCartCount: updateCartCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
