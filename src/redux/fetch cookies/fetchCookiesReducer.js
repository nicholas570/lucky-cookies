import {
  FETCH_COOKIES_SUCCESS,
  FETCH_COOKIES_FAILURE,
} from './fecthCookiesTypes';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

const fetchCookiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COOKIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        err: '',
      };
    case FETCH_COOKIES_FAILURE:
      return {
        loading: false,
        data: {},
        err: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCookiesReducer;
