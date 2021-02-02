import {FEEDBACK_LIST_REQUEST, FEEDBACK_LIST_SUCCESS, FEEDBACK_LIST_FAIL, FEEDBACK_DELETE_FAIL, FEEDBACK_DELETE_REQUEST, FEEDBACK_DELETE_SUCCESS, FEEDBACK_SEND_FAIL, FEEDBACK_SEND_REQUEST, FEEDBACK_SEND_SUCCESS} from '../constants/feedbackConstants';
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

export const feedbackComponentSendDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch (action.type) {
    case FEEDBACK_SEND_REQUEST:
      return {loading: true};

    case FEEDBACK_SEND_SUCCESS:
      return {loading: false, data:action.payload.data};

    case FEEDBACK_SEND_FAIL:
      return {loading: false, data:action.payload.data};

    default:
      return state;
  }
};


export const feedbackComponentDeleteDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch (action.type) {
    case FEEDBACK_DELETE_REQUEST:
      return {loading: true};
  
    case FEEDBACK_DELETE_SUCCESS:
      return {loading: false, data:action.payload.data};

    case FEEDBACK_DELETE_FAIL:
      return {loading: false, data: action.payload.data};
    default:
      return state;
  }
};