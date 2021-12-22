import {
  LIST_ALL_DATA_FAIL,
  LIST_ALL_DATA_REQUEST,
  LIST_ALL_DATA_SUCCESS,
} from "../constants/shared";

export const allDataReducer = (state = { loading: true, data: {} }, action) => {
  switch (action.type) {
    case LIST_ALL_DATA_REQUEST:
      return { loading: true };
    case LIST_ALL_DATA_SUCCESS:
      return { loading: false, data: action.payload };
    case LIST_ALL_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
