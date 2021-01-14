import {RATING_LIST_FAIL, RATING_LIST_REQUEST, RATING_LIST_SUCCESS} from '../constants/ratingConstants';
import {AnyAction} from 'redux';


export const ratingComponentsDataReducer = (state = {loading:true, data:[]}, action:AnyAction) => {
  switch (action.type) {
    case RATING_LIST_REQUEST:
      return {loading:true}
    
    case RATING_LIST_SUCCESS:
      return {loading: false, data:action.payload.data}

    case RATING_LIST_FAIL:
      return {loading: false, data:action.payload.data}
    default:
      return state;
  }
};