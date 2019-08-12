import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { alertActions } from '../actions/alert.actions'

export const userActions = {
    signup,
    signin,
    logout
};

function signup(user: any) {
    return (dispatch: any) => {
        dispatch(request({ user: user.username }));

        userService.signup(user)
            .then(
                user => { 
                    dispatch(success(user));           
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function signin(username: any, password: any) {
    return (dispatch: any) => {
        dispatch(request({ username }));

        userService.signin(username, password)
            .then(
                user => { 
                    dispatch(success(user));           
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}