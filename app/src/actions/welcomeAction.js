import { WELCOME } from "../constants/welcomeConstant";

export function welcomeAction() {
  return {
    type: WELCOME,
    payload: "hello There",
  };
}
