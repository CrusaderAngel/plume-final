import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { activitiesComponentsDataReducer } from './reducers/activitiesComponentsDataReducer';


const initialState = {};

const reducer = combineReducers({
  activitiesComponentsData: activitiesComponentsDataReducer
});

const composeEnchancer = compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;

