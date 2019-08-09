import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Browse from './Browse';
import UserInfo from './UserInfo';
import Purchase from './Purchase';
import Checkout from './Checkout';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Login from './Login';
import HotItems from "./HotItems";
import PrivateRoute from './PrivateRoute';
import notFoundPage from './NotFound';

function AppRouter() {
  return (
    <BrowserRouter>
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
            <Switch>
              <Route path="/hot/" component={HotItems} />
                <Route exact path="/" component={Home} />
                <Route exact path="/browse" component={Browse} />
                <PrivateRoute exact path="/userinfo" component={UserInfo} />
                <PrivateRoute exact path="/purchase" component={Purchase} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route component={notFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default AppRouter;