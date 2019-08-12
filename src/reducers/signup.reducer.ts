import { userConstants } from '../constants/user.constants';
import { ISignUpState } from './index'
// Add reducer to combined reducer file
const initState: ISignUpState ={
  user:{
    username: '',
    firstname: '',
    lastname:'',
    email:'',
    password: ''
 },
    submitted: false
}
 const signupReducer = (state = initState, action: any) => {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
        return { ...state, submitted: true };
    case userConstants.SIGNUP_SUCCESS:
        return { ...state};
    case userConstants.SIGNUP_FAILURE:
        return { ...state};
    default:
      return initState
  }
}

export default signupReducer;