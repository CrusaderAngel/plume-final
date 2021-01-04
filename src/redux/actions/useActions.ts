import {USE_LIST_REQUEST, USE_LIST_SUCCESS, USE_LIST_FAIL} from '../constants/useConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const fetchAllUseComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: USE_LIST_REQUEST
  });
  try {
    const data = await Axios.get('/api/useComponent');
    dispatch({
      type: USE_LIST_SUCCESS,
      payload: data
    });
  }catch(error) {
    dispatch({
      type: USE_LIST_FAIL,
      payload: error
    });
  };
  
};