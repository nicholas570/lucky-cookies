import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
} from './itemTypes';

const axios = require('axios');

export const addItemSuccess = (data) => {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: data,
  };
};

export const addItemFailure = (err) => {
  return {
    type: ADD_ITEM_FAILURE,
    payload: err,
  };
};

export const addItem = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        `https://lucky-cookies.herokuapp.com/api/carts/${data.cartId}`,
        data
      );
      dispatch(addItemSuccess(result.data.result));
    } catch (err) {
      dispatch(addItemFailure(err.message));
    }
  };
};

export const removeItemSuccess = (data) => {
  return {
    type: REMOVE_ITEM_SUCCESS,
    payload: data,
  };
};

export const removeItemFailure = (err) => {
  return {
    type: REMOVE_ITEM_FAILURE,
    payload: err,
  };
};

export const removeItem = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(
        `https://lucky-cookies.herokuapp.com/api/carts/${data.cartId}/${data.cookieId}`
      );
      dispatch(removeItemSuccess(result.data.result));
    } catch (err) {
      dispatch(removeItemFailure(err.message));
    }
  };
};
