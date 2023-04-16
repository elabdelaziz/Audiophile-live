import Axios from "axios";
import {
  HEADPHONES_LIST_FAIL,
  HEADPHONES_LIST_REQUEST,
  HEADPHONES_LIST_SUCCESS,
} from "../constants/headphonesConstants";
import { data } from "../data";

export const listheadphones = () => async (dispatch) => {
  dispatch({
    type: HEADPHONES_LIST_REQUEST,
  });
  try {
    dispatch({ type: HEADPHONES_LIST_SUCCESS, payload: data.headphones });
  } catch (error) {
    dispatch({ type: HEADPHONES_LIST_FAIL, payload: error.message });
  }
};
