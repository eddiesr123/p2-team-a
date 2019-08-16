import React from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, ISignInState } from '../reducers';
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
  signin: ISignInState,
}

const style = {
  height: '56px'
};

class AppRouter extends React.Component<ISignInProps, ISignInState> {
  public render() {
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
                <PrivateRoute path='/userinfo' loggedIn={this.props.signin.loggedIn} component={UserInfo} />
                <PrivateRoute path='/purchase' loggedIn={this.props.signin.loggedIn} component={Purchase} />
                <PrivateRoute path='/logout' loggedIn={this.props.signin.loggedIn} component={Logout} />
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
const mapStateToProps = (state: IState) => {
  return {
    signin: state.signin
  }
}

const actionCreators = {
  signin: userActions.signin,
}

export default connect(mapStateToProps, actionCreators)(AppRouter);