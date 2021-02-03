import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { activitiesComponentDeleteDataReducer, activitiesComponentsDataReducer, activitiesComponentSendDataReducer } from './reducers/activitiesComponentsDataReducer';
import {costComponentDeleteDataReducer, costComponentsDataReducer, costComponentSendDataReducer} from './reducers/costComponentsDataReducer';
import { feedbackComponentDeleteDataReducer, feedbackComponentsDataReducer, feedbackComponentSendDataReducer } from './reducers/feedbackComponentsDataReducer';
import { loginComponentDataReducer } from './reducers/loginComponentDataReducer';
import {ratingComponentsDataReducer} from './reducers/ratingComponentsDataReducer';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {
  userLogin: {
    data: localStorage.getItem('userCredentials') ? JSON.parse(localStorage.getItem('userCredentials')) : null
  }
};

export interface IState {
  activitiesComponentsData:object,
  costComponentsData:object,
  feedbackComponentsData: object,
  ratingComponentData: object,
  sendActivitiesComponentDataStatus:object,
  deleteActivitiesComponentDataStatus: object,
  sendCostComponentsDataStatus: object,
  deleteCostComponentDataStatus: object,
  sendFeedbackComponentDataStatus: object,
  deleteFeedbackComponentDataStatus: object,
  userLogin: {
    error?:boolean
    data: null
  };
}

const reducer = combineReducers({
  activitiesComponentsData: activitiesComponentsDataReducer,
  costComponentsData:costComponentsDataReducer,
  feedbackComponentsData: feedbackComponentsDataReducer,
  ratingComponentsData: ratingComponentsDataReducer,
  sendActivitiesComponentDataStatus: activitiesComponentSendDataReducer,
  deleteActivitiesComponentDataStatus: activitiesComponentDeleteDataReducer,
  sendCostComponentsDataStatus: costComponentSendDataReducer,
  deleteCostComponentDataStatus: costComponentDeleteDataReducer,
  sendFeedbackComponentDataStatus: feedbackComponentSendDataReducer,
  deleteFeedbackComponentDataStatus: feedbackComponentDeleteDataReducer,
  userLogin: loginComponentDataReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

