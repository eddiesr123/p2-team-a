import { userConstants } from '../constants/user.constants';
import { ISignUpState } from './index'

// Add reducer to combined reducer file
const initState: ISignUpState ={
  user:{
    username: '',
    firstName: '',
    lastName:'',
    email:'',
    password: ''
 },
    signuping: false,
    submitted: false
}

 const signupReducer = (state = initState, action: any) => {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
        return { ...state, submitted: true, signuping: true };
    case userConstants.SIGNUP_SUCCESS:
        return { ...state, submitted: false, signuping: false};
    case userConstants.SIGNUP_FAILURE:
        return { ...state, submitted: false, signuping: false};
    default:
      return initState
  }
}

export default signupReducer;