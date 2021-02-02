import {ACTIVITIES_LIST_REQUEST, ACTIVITIES_LIST_SUCCESS, ACTIVITIES_LIST_FAIL, ACTIVITIES_SEND_REQUEST, ACTIVITIES_SEND_SUCCESS, ACTIVITIES_SEND_FAIL, ACTIVITIES_DELETE_REQUEST, ACTIVITIES_DELETE_FAIL, ACTIVITIES_DELETE_SUCCESS} from '../constants/activitiesConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const fetchAllActivitiesComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: ACTIVITIES_LIST_REQUEST
  });
  try {
    const data = await Axios.get(`https://plume-backend.herokuapp.com/api/activities/getData`);
    dispatch({
      type: ACTIVITIES_LIST_SUCCESS,
      payload: data
    });
  }catch(error) {
    dispatch({
      type: ACTIVITIES_LIST_FAIL,
      payload: error
    });
  };
};


export const sendActivitiesComponentData = (_id:string, imagePath:string, textContent:string) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: ACTIVITIES_SEND_REQUEST
  });
  try{
    const response = await Axios.post("https://plume-backend.herokuapp.com/api/activities/sendData", {_id:_id, imagePath:imagePath, textContent:textContent});
    dispatch({
      type: ACTIVITIES_SEND_SUCCESS,
      payload: response
    });
  }catch (error) {
    dispatch({
      type: ACTIVITIES_SEND_FAIL,
      payload: error
    });
  }
};


export const deleteActivitiesComponentData = (_id:string) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: ACTIVITIES_DELETE_REQUEST
  });
  try{
    const response = await Axios.post("https://plume-backend.herokuapp.com/api/activities/deleteData", {
      _id:_id
    });
    dispatch({
      type: ACTIVITIES_DELETE_SUCCESS,
      payload: response
    });
  }catch (error) {
    dispatch({
      type: ACTIVITIES_DELETE_FAIL,
      payload: error
    });
  }
};