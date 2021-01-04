import {USE_LIST_REQUEST, USE_LIST_SUCCESS, USE_LIST_FAIL} from '../constants/useConstants';
import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';


export const listProducts = () => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: USE_LIST_REQUEST
  });
  try {

  }catch(error) {

  };
  
};