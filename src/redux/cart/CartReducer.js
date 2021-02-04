import { FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from './fetch/fetchCartTypes';
import { ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from './item/itemTypes';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

const CartReducer = (state = initialState, action) => {
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
    case ADD_ITEM_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload],
        err: '',
      };
    case ADD_ITEM_FAILURE:
      return { loading: false, data: [...state.data], err: action.payload };
    default:
      return state;
  }
};

export default CartReducer;
