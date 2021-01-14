import {ACTIVITIES_LIST_REQUEST, ACTIVITIES_LIST_SUCCESS, ACTIVITIES_LIST_FAIL} from '../constants/activitiesConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const fetchAllActivitiesComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: ACTIVITIES_LIST_REQUEST
  });
  try {
    const data = await Axios.get(`/api/activities/getData`);
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