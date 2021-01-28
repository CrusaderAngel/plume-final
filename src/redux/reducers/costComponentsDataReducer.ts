import {COST_LIST_SUCCESS, COST_LIST_REQUEST, COST_LIST_FAIL} from '../constants/costConstants';
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