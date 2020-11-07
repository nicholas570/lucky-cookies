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
  return (dispatch) => {
    axios
      .all([
        axios.get('/data.json'),
        axios.get('http://localhost:4000/api/cookies'),
      ])
      .then(
        axios.spread((json, db) => {
          const data = { ...json.data, cookies: [...db.data] };
          dispatch(fetchDataSuccess(data));
        })
      )
      .catch((err) => {
        dispatch(fetchDataFailure(err.message));
      });
  };
};
