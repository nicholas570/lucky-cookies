import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import fetchDataReducer from './fetch data/fetchDataReducer';
import fetchCookiesReducer from './fetch cookies/fetchCookiesReducer';
import fetchCartReducer from './cart/fetch cart/fetchCartReducer';
import postContactFormReducer from './forms/contact/postContactFormReducer';
import postNewsLetterFormReducer from './forms/newsletter/postNewsLetterFormReducer';

const rootReducer = combineReducers({
  infos: fetchDataReducer,
  cookies: fetchCookiesReducer,
  cart: fetchCartReducer,
  contactForm: postContactFormReducer,
  newsLetterForm: postNewsLetterFormReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
