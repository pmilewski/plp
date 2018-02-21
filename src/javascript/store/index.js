import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = window.initial_state || {};

export default createStore(
  rootReducer,
  initialState,
  // applyMiddleware(thunk, createLogger())
  applyMiddleware(thunk)
);
