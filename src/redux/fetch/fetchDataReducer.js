import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './fetchDataTypes';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: {},
        err: action.payload,
      };
    default:
      return state;
  }
};

export default fetchDataReducer;
