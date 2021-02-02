import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { activitiesComponentDeleteDataReducer, activitiesComponentsDataReducer, activitiesComponentSendDataReducer } from './reducers/activitiesComponentsDataReducer';
import {costComponentDeleteDataReducer, costComponentsDataReducer, costComponentSendDataReducer} from './reducers/costComponentsDataReducer';
import { feedbackComponentDeleteDataReducer, feedbackComponentsDataReducer, feedbackComponentSendDataReducer } from './reducers/feedbackComponentsDataReducer';
import {ratingComponentsDataReducer} from './reducers/ratingComponentsDataReducer';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};

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
  deleteFeedbackComponentDataStatus: feedbackComponentDeleteDataReducer
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

