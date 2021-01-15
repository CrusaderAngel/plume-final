import {COST_LIST_REQUEST, COST_LIST_SUCCESS, COST_LIST_FAIL} from '../constants/costConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';



export const fetchAllCostComponentsData = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: COST_LIST_REQUEST
  });
  try {
    const data = await Axios.get('https://plume-backend.herokuapp.com/api/cost/getData');
    dispatch({
      type:COST_LIST_SUCCESS,
      payload: data
    });
  }catch(error) {
    dispatch({
      type:COST_LIST_FAIL,
      payload:error
    })
  };
  
};