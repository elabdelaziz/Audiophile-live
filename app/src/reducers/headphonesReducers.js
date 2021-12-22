import {
  HEADPHONES_LIST_FAIL,
  HEADPHONES_LIST_REQUEST,
  HEADPHONES_LIST_SUCCESS,
} from "../constants/headphonesConstants";

export const headphonesListReducer = (
  state = { loading: true, headphones: [] },
  action
) => {
  switch (action.type) {
    case HEADPHONES_LIST_REQUEST:
      return { loading: true };
    case HEADPHONES_LIST_SUCCESS:
      return { loading: false, headphones: action.payload };
    case HEADPHONES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
