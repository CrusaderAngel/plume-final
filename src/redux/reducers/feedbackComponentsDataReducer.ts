import {FEEDBACK_LIST_REQUEST, FEEDBACK_LIST_SUCCESS, FEEDBACK_LIST_FAIL} from '../constants/feedbackConstants';
import {AnyAction} from 'redux';


export const feedbackComponentsDataReducer = (state = {loading: true,  data: []}, action:AnyAction) => {
  switch (action.type) {
    case FEEDBACK_LIST_REQUEST:
      return {loading: true};
    
    case FEEDBACK_LIST_SUCCESS:
      return {loading: false, data: action.payload.data};
    
    case FEEDBACK_LIST_FAIL:
      return {loading: false, data: action.payload.data};
  
    default:
      return state;
  }
};

