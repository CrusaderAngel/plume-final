import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';


const initialState = {};

const reducer = combineReducers({
});

const composeEnchancer = compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;

