import {
  LIST_ALL_DATA_FAIL,
  LIST_ALL_DATA_REQUEST,
  LIST_ALL_DATA_SUCCESS,
} from "../constants/shared";
import Axios from "axios";
import { data } from "../data";

export const listAllData = async (dispatch) => {
  dispatch({
    type: LIST_ALL_DATA_REQUEST,
  });
  try {
    dispatch({ type: LIST_ALL_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIST_ALL_DATA_FAIL, payload: error.message });
  }
};
