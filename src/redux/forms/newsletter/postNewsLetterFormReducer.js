import {
  POST_FORM_SUCCESS,
  POST_FORM_FAILURE,
} from './postNewsLetterFormTypes';

const initialState = {
  success: '',
  message: '',
};

const postNewsLetterFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_SUCCESS:
      return {
        success: action.payload.success,
        message: action.payload.message,
      };
    case POST_FORM_FAILURE:
      return {
        success: action.payload.success,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default postNewsLetterFormReducer;
