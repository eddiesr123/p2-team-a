import React from "react";
import { Link } from "react-router-dom";
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
///For shopping cart icon: <i class="fas fa-shopping-cart"></i>
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

            <a className="navbar-brand" href="#" id="mainTitle">
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
                  
                  <Link className="nav-link" to="/browse/">Browse</Link>
                </li>
              </ul>

              <form
                className="navbar-form form-inline navbar-right"
                action="/login/"
                method="post"
                role="login"
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
                  <label className="sr-only" htmlFor="inputPassword">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control input-sm text-light bg-dark"
                    id="inputPassword"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                {/* form-group */}
                <button
                  type="submit"
                  className="btn btn-outline-light "
                  value="Login"
                  id="login-from-nav"
                >
                  Sign in
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-light "
                  value="Logout"
                  id="logout"
                >
                  Logout
                </button>
              </form>

              {/*  <a href="/register/">Signup</a> */}
              {/*btn-default btn-sm*/}

              <ul className="nav navbar-nav navbar-right">
                <li className=" nav-item">
                  <a className="nav-link" href="/register/">
                    Sign up
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
