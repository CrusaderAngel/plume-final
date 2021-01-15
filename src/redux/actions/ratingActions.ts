import {RATING_LIST_FAIL, RATING_LIST_REQUEST, RATING_LIST_SUCCESS} from '../constants/ratingConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const fetchAllRatingComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any>=> {
  dispatch({
    type: RATING_LIST_REQUEST
  });
  try {
    const data = await Axios.get('https://plume-backend.herokuapp.com/api/rating/getData');
    dispatch({
      type: RATING_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type:RATING_LIST_FAIL,
      payload:error
    });
  }
}
