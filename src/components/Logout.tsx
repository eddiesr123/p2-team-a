import React from 'react';
import { Redirect } from "react-router";
import { IState, IUserState } from '../reducers';
import { userActions } from '../actions/user.actions';
import { connect } from 'react-redux';

export interface ILogoutProps {
    user: IUserState
}

class Logout extends React.Component<any, IUserState> {
    constructor(props: any) {
        super(props);
    
        this.state = {
            user: {
                username: '',
                password: '',
                firstname: '',
                lastname: '',
                email: '',
                cardnumber: '' 
              }
            }
        }

    componentDidMount() {
        // reset login status
    this.props.logout();
        }

    render() {
        return (
            <div>
                <Redirect to="/" />
            </div >
        );
    }
}

const mapStateToProps = (state: IState) => {
    const { user } = state.signin;
    return { user };
  }

const actionCreators = {
    logout: userActions.logout
}

export default connect(mapStateToProps, actionCreators)(Logout);