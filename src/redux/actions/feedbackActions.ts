import {FEEDBACK_LIST_REQUEST, FEEDBACK_LIST_SUCCESS, FEEDBACK_LIST_FAIL} from '../constants/feedbackConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const fetchAllFeedbackComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: FEEDBACK_LIST_REQUEST
  });
  try {
    const data = Axios.get('/api/reviews/getData');
    dispatch({
      type:FEEDBACK_LIST_SUCCESS,
      payload:data
    });
  }catch(error) {
    dispatch({
      type:FEEDBACK_LIST_FAIL,
      payload:error
    });
  };
  
};