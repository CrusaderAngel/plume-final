import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { activitiesComponentsDataReducer } from './reducers/activitiesComponentsDataReducer';
import {costComponentsDataReducer} from './reducers/costComponentsDataReducer';
import { feedbackComponentsDataReducer } from './reducers/feedbackComponentsDataReducer';
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
  ratingComponentsData: ratingComponentsDataReducer
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

