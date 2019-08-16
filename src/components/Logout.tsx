import React from 'react';
import { IState } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userConstants } from '../constants/user.constants';

export interface ILogoutProps {
    logout: () => void
}

export interface ILogoutState {
    // this component does not have any internal state
}

class Logout extends React.Component<ILogoutProps, ILogoutState> {

    render() {
        return (
            <div>
                <Link to="/" className="nav-link" onClick={() => this.props.logout() } >Logout</Link>
            </div >
        );
    }
}

// no state to keep track of for the logout component
const mapStateToProps = (state: IState) => {
    return {}
}

const logout = () => {
    let action: any = {};
    action.type = userConstants.LOGOUT;
    return action;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);