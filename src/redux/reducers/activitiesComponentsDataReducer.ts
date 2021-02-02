import {ACTIVITIES_LIST_REQUEST, ACTIVITIES_LIST_SUCCESS, ACTIVITIES_LIST_FAIL, ACTIVITIES_SEND_REQUEST, ACTIVITIES_SEND_SUCCESS, ACTIVITIES_SEND_FAIL, ACTIVITIES_DELETE_REQUEST, ACTIVITIES_DELETE_SUCCESS, ACTIVITIES_DELETE_FAIL} from '../constants/activitiesConstants';
import {AnyAction} from 'redux';

export const activitiesComponentsDataReducer = (state = { loading: true, data: [] }, action:AnyAction) => {
  switch (action.type) {
    case ACTIVITIES_LIST_REQUEST:
      return { loading: true };

    case ACTIVITIES_LIST_SUCCESS:
      return { loading: false, data: action.payload.data };

    case ACTIVITIES_LIST_FAIL:
      return { loading: false, error: action.payload.data };
    default:
      return state;
  };
};

export const activitiesComponentSendDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch (action.type) {
    case ACTIVITIES_SEND_REQUEST:
      return {loading: true};

    case ACTIVITIES_SEND_SUCCESS:
      return {loading: false, data: action.payload.data};

    case ACTIVITIES_SEND_FAIL:
      return {loading: false, data: action.payload.data};
    
    default:
      return state;
  }
};


export const activitiesComponentDeleteDataReducer = (state = {loading: true, data: []}, action:AnyAction) => {
  switch(action.type){
    case  ACTIVITIES_DELETE_REQUEST:
      return {loading: true};
    
    case ACTIVITIES_DELETE_SUCCESS:
      return {loading: false, data:action.payload.data};

    case ACTIVITIES_DELETE_FAIL:
      return {loading: false, data: action.payload.data};

    default:
      return state;
  }
}