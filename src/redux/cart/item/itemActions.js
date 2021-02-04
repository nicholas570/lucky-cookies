import { ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from './itemTypes';

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
        `http://localhost:4000/api/carts/add-item`,
        data
      );
      dispatch(addItemSuccess(result.data.result));
    } catch (err) {
      dispatch(addItemFailure(err.message));
    }
  };
};
