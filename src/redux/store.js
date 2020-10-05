import { composeWithDevTools } from 'redux-devtools-extension';
import fetchDataReducer from './fetch/fetchDataReducer';

const redux = require('redux');
const thunk = require('redux-thunk').default;

const { applyMiddleware } = redux;
const { createStore } = redux;

const store = createStore(
  fetchDataReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
