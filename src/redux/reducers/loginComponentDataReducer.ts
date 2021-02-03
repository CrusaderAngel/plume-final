import {AnyAction} from 'redux';
import { LOGIN_LIST_REQUEST, LOGIN_LIST_SUCCESS, LOGIN_LIST_FAIL } from '../constants/loginConstants';

export const loginComponentDataReducer = (state = {}, action:AnyAction) => {
  switch (action.type) {
    case LOGIN_LIST_REQUEST:
      return {error: false};
    
    case LOGIN_LIST_SUCCESS:
      return {error: false, data: action.payload.data};
    
    case LOGIN_LIST_FAIL:
      return {error: true, data:null};
  
    default:
      return state;
  }
};