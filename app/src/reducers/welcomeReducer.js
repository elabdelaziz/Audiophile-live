import { WELCOME } from "../constants/welcomeConstant";

export default function welcomeReducer(state = { welcome: [] }, action) {
  switch (action.type) {
    case WELCOME:
      return {
        ...state,
        welcome: action.payload,
      };
    default:
      return state;
  }
}
