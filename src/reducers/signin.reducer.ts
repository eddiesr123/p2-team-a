import { userConstants } from '../constants/user.constants';
import { ISignInState } from './index'

const initState: ISignInState = {
  user: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      creditCard: ''
},
  loggingIn: false,
  loggedIn: false,
  submitted: false
}

const signinReducer = (state = initState, action: any) => {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return { ...action.user, loggingIn: true, submitted: true };
    case userConstants.SIGNIN_SUCCESS:
      return { user: action.user, loggingIn: false, loggedIn: true, submitted: true };
    case userConstants.SIGNIN_FAILURE:
      return { ...state, loggingIn: false, loggedIn: false, submitted: false };
    case userConstants.LOGOUT:
      return { ...state, loggingIn: false, loggedIn: false, submitted: false };
    default:
      return initState
  }
}

export default signinReducer;