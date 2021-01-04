import {USE_LIST_REQUEST, USE_LIST_SUCCESS, USE_LIST_FAIL} from '../constants/useConstants';
import {AnyAction} from 'redux';

export const useComponentsDataReducer = (state = { loading: true, useListData: [] }, action:AnyAction) => {
  switch (action.type) {
    case USE_LIST_REQUEST:
      return { loading: true };

    case USE_LIST_SUCCESS:
      console.log(action.payload)
      return { loading: false, useListData: action.payload };

    case USE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  };
};