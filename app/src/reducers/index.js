import { combineReducers } from "redux";
import { categoryListReducer } from "./categoryListReducer";
import welcomeReducer from "./welcomeReducer";
import { headphonesListReducer } from "./headphonesReducers";
import { allDataReducer } from "./allDataReducer";
// import authedUser from "./authedUser";
// import users from "./users";
// import tweets from "./tweets";

export default combineReducers({
  welcome: welcomeReducer,
  categoryList: categoryListReducer,
  headphonesList: headphonesListReducer,
  allData: allDataReducer,
  //   authedUser,
  //   users,
  //   tweets,
});
