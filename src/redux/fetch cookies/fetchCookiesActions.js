import {
  FETCH_COOKIES_SUCCESS,
  FETCH_COOKIES_FAILURE,
} from './fetchCookiesTypes';

const axios = require('axios');

export const fetchCookiesSuccess = (data) => {
  return {
    type: FETCH_COOKIES_SUCCESS,
    payload: data,
  };
};

export const fetchCookiesFailure = (err) => {
  return {
    type: FETCH_COOKIES_FAILURE,
    payload: err,
  };
};

export const fetchCookies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        'https://lucky-cookies.herokuapp.com/api/cookies'
      );
      dispatch(fetchCookiesSuccess(result.data.result));
    } catch (err) {
      dispatch(fetchCookiesFailure(err.message));
    }
  };
};
