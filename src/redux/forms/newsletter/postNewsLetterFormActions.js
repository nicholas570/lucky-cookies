import {
  POST_FORM_SUCCESS,
  POST_FORM_FAILURE,
} from './postNewsLetterFormTypes';

const axios = require('axios');

export const postNewsLetterFormSuccess = (data) => {
  return {
    type: POST_FORM_SUCCESS,
    payload: data,
  };
};

export const postNewsLetterFormFailure = (err) => {
  return {
    type: POST_FORM_FAILURE,
    payload: err,
  };
};

export const postNewsLetterForm = (state) => {
  return (dispatch) => {
    axios
      .post('https://lucky-cookies.herokuapp.com/api/newsletter', { ...state })
      .then(({ data }) => dispatch(postNewsLetterFormSuccess(data)))
      .catch((err) => {
        dispatch(postNewsLetterFormFailure(err.message));
      });
  };
};
