import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component<any, any> {
  render() {
    return (
      <div id="navbar">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar top-nav-collapse bg-dark"
          role="navigation"
        >
          <div className="container">
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target=".navbar-opendiet-collapse"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <Link className="navbar-brand" to="/" id="mainTitle">
              COSTUMES Of DOOM!
            </Link>

            {/* Collapsible content */}
            <div className="collapse navbar-collapse navbar-opendiet-collapse">
              {/*links */}
              <ul className="nav navbar-nav mr-auto smooth-scroll">
                <li className="nav-item">
                <Link className="nav-link" to="/" id="navbar-home-btn">Home</Link>
                </li>

                <li className="divider-vertical nav-item" />
                <li className="nav-item">
                  <Link className="nav-link" to="/browse/" id="navbar-browse-btn">Browse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/userinfo/" id="navbar-userinfo-btn">User Information</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/purchase/" id="navbar-purchase-btn">Purchase</Link>
                </li>
              </ul>

              <form
                className="navbar-form form-inline navbar-right"
                action="/login/"
                method="post"
                /*role="login" */
              >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="LmBD2r1icl5WeMRyDJ5HHOtNCZqzmUSCGpZeOobHnM43IAZUXhNyUQSaUz7h3XlR"
                />
                <div className="form-group">
                  <label className="sr-only" htmlFor="inputUsername">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control input-sm text-light bg-dark"
                    id="inputUsername"
                    name="username"
                    placeholder="Username"
                  />
                </div>
                {/* form-group */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="inputPassword">Password:</label> 
                  <input
                    type="password" className="form-control input-sm text-light bg-dark"
                    id="inputPassword" name="password" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="inputSignUp">Sign Up:</label> 
                  <button type="submit" className="btn btn-outline-light" value="Login" id="login-from-nav-btn">
                  Sign in
                </button>
                <button type="submit" className="btn btn-outline-light" value="Logout" id="navbar-logout-btn">
                  Logout
                </button>
                </div>
                {/* form-group */}
                
              </form>

              {/*  <a href="/register/">Signup</a> */}
              {/*btn-default btn-sm*/}

              <ul className="nav navbar-nav navbar-right">
                <li className=" nav-item">
                  <a className="nav-link" href="/register/">
                    Sign up
                  </a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/cart/" id="navbar-cart-btn">
                  <span className="glyphicon glyphicon-shopping-cart"></span>Cart</Link> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
