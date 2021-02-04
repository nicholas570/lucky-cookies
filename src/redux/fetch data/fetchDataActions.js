import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './fetchDataTypes';

const axios = require('axios');

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (err) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: err,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get('/data.json');
      dispatch(fetchDataSuccess(result.data));
    } catch (err) {
      dispatch(fetchDataFailure(err.message));
    }
  };
};
