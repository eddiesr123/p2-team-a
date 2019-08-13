import { userConstants } from '../constants/user.constants';
import { IUserState } from './index'

// Add reducer to combined reducer file
const initState: IUserState = {
    user: {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        cardnumber: '' 
      }
  }
  
   const userinfoReducer = (state = initState, action: any) => {
    switch (action.type) {
      case userConstants.USERINFO_REQUEST:
          return { ...state};
      case userConstants.USERINFO_SUCCESS:
          return { ...state};
      case userConstants.USERINFO_FAILURE:
          return { ...state};
      default:
        return initState
    }
  }
  
  export default userinfoReducer;