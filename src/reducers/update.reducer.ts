import { userConstants } from '../constants/user.constants';
import { IUserState } from './index'

// Add reducer to combined reducer file
const initState: IUserState ={
    updateUser: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        creditCard: ''
    },
      updating: false,
      submitted: false
}

 const updateReducer = (state = initState, action: any) => {
  switch (action.type) {
    case userConstants.UPDATE_REQUEST:
        return { ...state, updating: true, submitted: true };
    case userConstants.UPDATE_SUCCESS:
        return { ...state, updating: false, submitted: false};
    case userConstants.UPDATE_FAILURE:
        return { ...state, updating: false, submitted: false};
    default:
      return state
  }
}

export default updateReducer;