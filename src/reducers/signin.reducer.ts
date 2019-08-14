import { userConstants } from '../constants/user.constants';
import { ISignInState } from './index'

const initState: ISignInState = {
  user: {
    username: '',
    password: '',
},
  loggingIn: false,
  loggedIn: false,
  submitted: false
}

const signinReducer = (state = initState, action: any) => {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return { ...state, loggingIn: true, submitted: true };
    case userConstants.SIGNIN_SUCCESS:
      return { ...state, loggedIn: true, submitted: true };
    case userConstants.SIGNIN_FAILURE:
      return {...state};
    case userConstants.LOGOUT:
      return {...state};
    default:
      return initState
  }
}

export default signinReducer;