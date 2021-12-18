import { combineReducers } from "redux";
import { categoryListReducer } from "./categoryListReducer";
import welcomeReducer from "./welcomeReducer";
// import authedUser from "./authedUser";
// import users from "./users";
// import tweets from "./tweets";

export default combineReducers({
  welcome: welcomeReducer,
  categoryList: categoryListReducer,
  //   authedUser,
  //   users,
  //   tweets,
});
