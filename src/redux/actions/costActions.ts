import {COST_LIST_REQUEST, COST_LIST_SUCCESS, COST_LIST_FAIL, COST_SEND_REQUEST, COST_SEND_SUCCESS, COST_SEND_FAIL, COST_DELETE_REQUEST, COST_DELETE_SUCCESS, COST_DELETE_FAIL} from '../constants/costConstants';
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


export const sendCostComponentData = (_id:string,imagePath:string, titleText:string,price:number, additionalInfo:string) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: COST_SEND_REQUEST
  });
  try{
    const result = await Axios.post("https://plume-backend.herokuapp.com/api/cost/sendData", {_id:_id, imagePath: imagePath, titleText:titleText, price: price, additionalInfo: additionalInfo});
    dispatch({
      type: COST_SEND_SUCCESS,
      payload: result
    });
  }catch (error) {
    dispatch({
      type: COST_SEND_FAIL,
      payload: error
    });
  }
};

export const deleteCostComponentData = (_id:string) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: COST_DELETE_REQUEST
  });
  try{
    const result = await Axios.post("https://plume-backend.herokuapp.com/api/cost/deleteData", {_id:_id});
    dispatch({
      type: COST_DELETE_SUCCESS,
      payload: result
    });
  }catch (error) {
    dispatch({
      type: COST_DELETE_FAIL,
      payload: error
    });
  }
};