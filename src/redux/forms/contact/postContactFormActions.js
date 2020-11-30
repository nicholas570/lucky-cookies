import { POST_FORM_SUCCESS, POST_FORM_FAILURE } from './postContactFormTypes';

const axios = require('axios');

export const postContactFormSuccess = (data) => {
  return {
    type: POST_FORM_SUCCESS,
    payload: data,
  };
};

export const postContactFormFailure = (err) => {
  return {
    type: POST_FORM_FAILURE,
    payload: err,
  };
};

export const postContactForm = (state) => {
  return (dispatch) => {
    axios
      .post('https://lucky-cookies.herokuapp.com/api/contacts', { ...state })
      .then(({ data }) => dispatch(postContactFormSuccess(data)))
      .catch((err) => {
        dispatch(postContactFormFailure(err.message));
      });
  };
};
