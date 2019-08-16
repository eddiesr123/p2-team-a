import React from 'react';
import { Redirect } from "react-router";
import { IState, ISignInState } from '../reducers';
import { userActions } from '../actions/user.actions';
import { connect } from 'react-redux';

export interface ISignInProps {
    user: ISignInState
}

class Logout extends React.Component<any, ISignInState> {
    constructor(props: any) {
        super(props);
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