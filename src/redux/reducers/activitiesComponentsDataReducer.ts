import {ACTIVITIES_LIST_REQUEST, ACTIVITIES_LIST_SUCCESS, ACTIVITIES_LIST_FAIL} from '../constants/activitiesConstants';
import {AnyAction} from 'redux';

export const activitiesComponentsDataReducer = (state = { loading: true, data: [] }, action:AnyAction) => {
  switch (action.type) {
    case ACTIVITIES_LIST_REQUEST:
      return { loading: true };

    case ACTIVITIES_LIST_SUCCESS:
      console.log(action.payload)
      return { loading: false, data: action.payload };

    case ACTIVITIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  };
};