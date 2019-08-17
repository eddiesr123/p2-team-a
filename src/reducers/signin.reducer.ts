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

interface Action {
  type: any,
  user: any, 
}

const signinReducer = (state:ISignInState = initState, action: Action) => {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return { ...state, ...action.user, loggingIn: true, submitted: true };
    case userConstants.SIGNIN_SUCCESS:
      return { ...state, user: action.user, loggingIn: false, loggedIn: true, submitted: true };
    case userConstants.SIGNIN_FAILURE:
      return { ...state, loggingIn: false, loggedIn: false, submitted: false };
    case userConstants.LOGOUT:
      return { ...initState };
    default:
      return { ...state }
  }
}

export default signinReducer;