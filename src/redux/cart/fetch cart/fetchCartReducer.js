import { FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from './fetchCartTypes';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

const fetchCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        err: '',
      };
    case FETCH_CART_FAILURE:
      return {
        loading: false,
        data: {},
        err: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCartReducer;
