import { FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from './fetchCartTypes';

const axios = require('axios');

export const fetchCartSuccess = (data) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: data,
  };
};

export const fetchCartFailure = (err) => {
  return {
    type: FETCH_CART_FAILURE,
    payload: err,
  };
};

export const fetchCart = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `https://lucky-cookies.herokuapp.com/api/carts/${id}`
      );
      dispatch(fetchCartSuccess(result.data.result));
    } catch (err) {
      dispatch(fetchCartFailure(err.message));
    }
  };
};
