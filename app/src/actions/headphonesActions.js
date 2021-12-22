import Axios from "axios";
import {
  HEADPHONES_LIST_FAIL,
  HEADPHONES_LIST_REQUEST,
  HEADPHONES_LIST_SUCCESS,
} from "../constants/headphonesConstants";

export const listheadphones = () => async (dispatch) => {
  dispatch({
    type: HEADPHONES_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/headphones");
    dispatch({ type: HEADPHONES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: HEADPHONES_LIST_FAIL, payload: error.message });
  }
};
