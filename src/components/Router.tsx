import React from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IState } from '../reducers';
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
import Logout from "./Logout";

export interface ISignInProps {
  // read in data from state store
  loggedIn: boolean,
}

const style = {
  height: '56px'
};

class AppRouter extends React.Component<ISignInProps> {
  render() {
    return (
      <div>
        <div>
          <header className="App-header">
            <nav id="nav">
              <div id="navbar">
                <Navbar />
                <div id="after-navbar" style={style}></div>  
              </div>
            </nav>
          </header>
          <div id='content'>
          <Switch>
                <PrivateRoute path='/userinfo' isAuthenticated={this.props.loggedIn} component={UserInfo} />
                <PrivateRoute path='/purchase' isAuthenticated={this.props.loggedIn} component={Purchase} />
                <PrivateRoute path='/logout' isAuthenticated={this.props.loggedIn} component={Logout} />
                <Route exact path="/" component={HotItems} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/cart" component={Cart}/>
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/login" component={SignIn} />
                <Route component={notFoundPage} />
          </Switch> 
          </div>
        </div>
      </div>
  );
}
}

// read state-store values into state-component values
const mapStateToProps = (state: IState): ISignInProps =>({
    loggedIn: state.signin.loggedIn
});

export default connect(mapStateToProps)(AppRouter);