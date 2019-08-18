import { alertConstants } from '../constants/alert.constants';

import { IAlertState } from './index'
const initState: IAlertState = {
  type: '',
  message: ''
}

export const alertReducer = (state = initState, action: any) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return initState;
    default:
      return state
  }
}