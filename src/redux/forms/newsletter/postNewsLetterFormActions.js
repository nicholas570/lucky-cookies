import {
  POST_NL_FORM_SUCCESS,
  POST_NL_FORM_FAILURE,
} from './postNewsLetterFormTypes';

const axios = require('axios');

export const postNewsLetterFormSuccess = (data) => {
  return {
    type: POST_NL_FORM_SUCCESS,
    payload: data,
  };
};

export const postNewsLetterFormFailure = (err) => {
  return {
    type: POST_NL_FORM_FAILURE,
    payload: err,
  };
};

export const postNewsLetterForm = (state) => {
  return (dispatch) => {
    axios
      .post('http://localhost:4000/api/newsletter', { ...state })
      .then(({ data }) => dispatch(postNewsLetterFormSuccess(data)))
      .catch((err) => {
        dispatch(postNewsLetterFormFailure(err.response.data));
      });
  };
};
