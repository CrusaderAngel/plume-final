import {FEEDBACK_LIST_REQUEST, FEEDBACK_LIST_SUCCESS, FEEDBACK_LIST_FAIL, FEEDBACK_SEND_FAIL, FEEDBACK_SEND_REQUEST, FEEDBACK_SEND_SUCCESS, FEEDBACK_DELETE_FAIL, FEEDBACK_DELETE_REQUEST, FEEDBACK_DELETE_SUCCESS} from '../constants/feedbackConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const fetchAllFeedbackComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: FEEDBACK_LIST_REQUEST
  });
  try {
    const data = await Axios.get('https://plume-backend.herokuapp.com/api/feedback/getData');
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

export const sendFeedbackComponentData = (_id:string,imagePath:string, columnId:number) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: FEEDBACK_SEND_REQUEST
  });
  try{
    const result = await Axios.post("https://plume-backend.herokuapp.com/api/feedback/sendData", {_id:_id, imagePath: imagePath, columnId:columnId});
    dispatch({
      type: FEEDBACK_SEND_SUCCESS,
      payload: result
    });
  }catch (error) {
    dispatch({
      type: FEEDBACK_SEND_FAIL,
      payload: error
    });
  }
};

export const deleteFeedbackComponentData = (_id:string) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: FEEDBACK_DELETE_REQUEST
  });
  try{
    const result = await Axios.post("https://plume-backend.herokuapp.com/api/feedback/deleteData", {_id:_id});
    dispatch({
      type: FEEDBACK_DELETE_SUCCESS,
      payload: result
    });
  }catch (error) {
    dispatch({
      type: FEEDBACK_DELETE_FAIL,
      payload: error
    });
  }
};