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
        creditCard: {
        number: '',
        address: '',
        securityCode: '',
        expiration: ''
        }
    },
      updating: false,
      updated: false,
      submitted: false
};

interface Action {
    type: any,
    user: any,
  }

 const updateReducer = (state: IUserState = initState, action: Action) => {
  switch (action.type) {
    case userConstants.UPDATE_REQUEST:
        return { ...action.user, updating: true, updated: false, submitted: true };
    case userConstants.UPDATE_SUCCESS:
        return { ...state, user: action.user, updating: false, updated: true, submitted: false};
    case userConstants.UPDATE_FAILURE:
        return { ...state, updating: false, updated: false, submitted: false};
    default:
      return state
  }
}

export default updateReducer;