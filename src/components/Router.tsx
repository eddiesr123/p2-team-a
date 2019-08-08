import React from "react";

import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Home'
import Browse from './Browse'
import UserInfo from './UserInfo'
import Purchase from './Purchase'
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import { Switch } from "@material-ui/core";


const notFoundPage = () => {
  return <div>Not Found</div>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <nav id="nav">
              <div id="nav-container">
                <Link to="/">Home</Link>
                <Link to="/browse/">Browse</Link>
                <Link to="/purchase/">Purchase</Link>
                <Link to="/userinfo/">UserInfo</Link>
                <Link to="/checkout/">Checkout</Link>
                <p>More navbar stuff</p>
                <Navbar />
              </div>
            </nav>
          </header>
          <div id='content'>
            <Route exact path="/" component={Home} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/userinfo" component={UserInfo} />
            <Route exact path="/purchase" component={Purchase} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={notFoundPage} />
          </div>
        </div>
      </div>
    </Router >
  );
}

export default AppRouter;