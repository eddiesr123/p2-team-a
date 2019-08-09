import React from "react";
import { Link } from "react-router-dom";
import { INavbarState, IState } from '../reducers'
import { updateCartCount } from '../actions/navbar.actions'
import { connect } from "react-redux"
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';

export interface INavbarProps { 
  // read in data from state store
  navbar: INavbarState,
  updateCartCount: (amount:number) => void;
}


///For shopping cart icon: <i class="fas fa-shopping-cart"></i>
export class Navbar extends React.Component<any, any> {
  render() {
    return (
      <div id="navbar">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar top-nav-collapse bg-dark"
          role="navigation">
          <div className="container">
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-opendiet-collapse">
              <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand" href="/" id="mainTitle">
              Costumes Of DOOM!
            </a>

            {/* Collapsible content */}
            <div className="collapse navbar-collapse navbar-opendiet-collapse">
              {/*links */}
              <ul className="nav navbar-nav mr-auto smooth-scroll">
                <li className="active nav-item">
                  <a className="nav-link" href="/">
                    Home{" "}
                  </a>
                </li>

                <li className="divider-vertical nav-item" />
                <li>
                  <Link className="nav-link" to="/browse">Browse</Link>
                </li>
              </ul>

                <ul className="nav navbar-nav navbar-right">
                <li className=" nav-item">
                  <a className="nav-link" href="/login">
                    Sign in
                  </a>
                </li>
                <ul />
              </ul>

              {/*  <a href="/register/">Signup</a> */}
              {/*btn-default btn-sm*/}

              <ul className="nav navbar-nav navbar-right">
                <li className=" nav-item">
                  <a className="nav-link" href="/register">
                    Sign up
                  </a>
                </li>
                <ul />
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className=" nav-item">
                  <a className="nav-link" href="/cart">
                    Cart
                  </a>
                </li>
                <ul />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// read state-store values into state-component values
const mapStateToProps = (state: IState) => {
  return {
    navbar: state.navbar
  }
}

const mapDispatchToProps = {
  updateCartCount: updateCartCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
