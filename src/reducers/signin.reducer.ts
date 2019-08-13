import { userConstants } from '../constants/user.constants';
import { ISignInState } from './index'

const initState: ISignInState = {
  user:{
    username: '',
    password: ''
 },
    loggingIn: false,
    loggedIn: false,
    submitted: false
}

let userLocal = localStorage.getItem('user');
//const initState = userLocal ? { loggedIn: true, userLocal } : {};
const signinReducer = (state = initState, action: any) => {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return { ...state, loggingIn: true, user: action.user };
    case userConstants.SIGNIN_SUCCESS:
      return { ...state, loggedIn: true, user: action.user };
    case userConstants.SIGNIN_FAILURE:
      return {...state};
    case userConstants.LOGOUT:
      return {...state};
    default:
      return initState
  }
}

export default signinReducer;