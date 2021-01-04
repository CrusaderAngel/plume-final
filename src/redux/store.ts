import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { useComponentsDataReducer } from './reducers/useComponentsDataReducer';


const initialState = {};

const reducer = combineReducers({
  useDataList: useComponentsDataReducer
});

const composeEnchancer = compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;

