import Axios from 'axios';
import { Dispatch } from 'react';
import {AnyAction} from 'redux';
import { LOGIN_LIST_FAIL, LOGIN_LIST_REQUEST, LOGIN_LIST_SUCCESS } from '../constants/loginConstants';

export const sendUserCredentials = (email:string, password:string) => async(dispatch:Dispatch<AnyAction>):Promise<any> => {
  dispatch({
    type: LOGIN_LIST_REQUEST
  });
  try {
    const data = await Axios.post('https://plume-backend.herokuapp.com/api/login', {email:email, password:password});
    dispatch({
      type: LOGIN_LIST_SUCCESS,
      payload: data
    });
    localStorage.setItem("userCredentials", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_LIST_FAIL,
      payload: error
    });
  };
};
