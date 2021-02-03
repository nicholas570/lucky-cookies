import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import fetchDataReducer from './fetch/fetchDataReducer';
import fetchCookiesReducer from './fetch cookies/fetchCookiesReducer';
import postContactFormReducer from './forms/contact/postContactFormReducer';
import postNewsLetterFormReducer from './forms/newsletter/postNewsLetterFormReducer';

const rootReducer = combineReducers({
  infos: fetchDataReducer,
  cookies: fetchCookiesReducer,
  contactForm: postContactFormReducer,
  newsLetterForm: postNewsLetterFormReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
