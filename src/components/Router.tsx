import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Browse from './Browse';
import UserInfo from './UserInfo';
import Purchase from './Purchase';
import Checkout from './Checkout';
import Navbar from './Navbar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import HotItems from "./HotItems";
import PrivateRoute from './PrivateRoute';
import notFoundPage from './NotFound';
import Cart from "./Cart";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <header className="App-header">
            <nav id="nav">
              <div id="navbar">
                <Navbar />
              </div>
            </nav>
          </header>
          <div id='content'>
            <Switch>
                <Route path="/hot/" component={HotItems} />
                <Route exact path="/" component={Home} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/userinfo" component={UserInfo} />
                <Route exact path="/purchase" component={Purchase} />
                <Route exact path="/checkout" component={Checkout} />
                <Route path="/cart" component={Cart}/>
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/login" component={SignIn} />
                <Route component={notFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default AppRouter;