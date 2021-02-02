import {COST_LIST_SUCCESS, COST_LIST_REQUEST, COST_LIST_FAIL, COST_SEND_REQUEST, COST_SEND_SUCCESS, COST_SEND_FAIL, COST_DELETE_REQUEST, COST_DELETE_SUCCESS, COST_DELETE_FAIL} from '../constants/costConstants';
import {AnyAction} from 'redux';

export const costComponentsDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch (action.type) {
    case COST_LIST_REQUEST:
      return {loading: true};

    case COST_LIST_SUCCESS:
      return {loading: false,
      data:action.payload.data};
    
    case COST_LIST_FAIL:
      return {loading: false, data:action.payload.data};
    default:
      return state;
  }
};


export const costComponentSendDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch (action.type) {
    case COST_SEND_REQUEST:
      return {loading: true};

    case COST_SEND_SUCCESS:
      return {loading: false, data:action.payload.data};

    case COST_SEND_FAIL:
      return {loading: false, data:action.payload.data};

    default:
      return state;
  }
};


export const costComponentDeleteDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch (action.type) {
    case COST_DELETE_REQUEST:
      return {loading: true};
  
    case COST_DELETE_SUCCESS:
      return {loading: false, data:action.payload.data};

    case COST_DELETE_FAIL:
      return {loading: false, data: action.payload.data};
    default:
      return state;
  }
};