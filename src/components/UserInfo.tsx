import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, IUserState } from '../reducers';
import { userService } from '../services/user.service';

export interface IUserProps {
    // read in data from state store
    user: IUserState,
    //orders: any,
    //user: any,
    //name: any,
    //classes: any
}

class UserInfo extends React.Component<any, IUserState> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event: any) {
  const { name, value } = event.target;
  const { user } = this.state;
  this.setState({
    user: {
      ...user,
      [name]: value
    }
  });
}

handleSubmit(event: any) {
  event.preventDefault();
  //this.setState({ submitting: true });
  const { user } = this.state;
  if (user.username && user.firstName && user.lastName && user.email && user.password && user.creditCard) {
    userService.changeInfo(user);
  }
}

render() {
const { pristine, submitting, user } = this.props; 
return (
  <div>
    <h1 className="title">Personal information</h1>
    <form onSubmit={this.handleSubmit}>
      <div>
        <input type="text" placeholder = {`${user.username}`} name="username" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" placeholder = {`${user.password}`} name="password" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" placeholder = {`${user.firstName}`} name="firstName" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" placeholder = {`${user.lastName}`} name="lastName" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" placeholder = {`${user.email}`} name="email" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" placeholder = {`${user.creditCard}`} name="creditCard" onChange={this.handleChange} max="16" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Update</button>
      </div>
    </form>
  </div>
  );
}
}

function mapStateToProps(state: IState) {
  const { user } = state.signin;
  return { user };
}

const actionCreators = {
  changeInfo: userActions.changeInfo,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(UserInfo)