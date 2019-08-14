import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { alertActions } from '../actions/alert.actions';
import { createBrowserHistory } from 'history';

export const userActions = {
    signup,
    signin,
    changeInfo,
    logout
};

const history = createBrowserHistory();

function signup(user: any) {
    return (dispatch: any) => {
        dispatch(request({ user }));

        userService.signup(user)
            .then(
                user => { 
                    dispatch(success(user));    
                    history.push('/');
                    dispatch(alertActions.success('Registration successful'));       
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: any) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(user: any) { return { type: userConstants.SIGNUP_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.SIGNUP_FAILURE, error } }
}

function signin(user: any) {
    return (dispatch: any) => {
        dispatch(request({ user }));

        userService.signin(user)
            .then(
                user => { 
                    dispatch(success(user));  
                    history.push('/');         
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: any) { return { type: userConstants.SIGNIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.SIGNIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.SIGNIN_FAILURE, error } }
}

function changeInfo(user : any) {
    return ( dispatch : any) => {
        dispatch(request());

        userService.changeInfo(user)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.USERINFO_REQUEST } }
    function success(user: any) { return { type: userConstants.USERINFO_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.USERINFO_FAILURE, error } }
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}