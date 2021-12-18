import { createStore, compose } from "redux";
// import thunk from "redux-thunk";
import reducers from "./reducers";
import middleware from "./middleware";

// const initialState = {
//   userSignin: {
//     userInfo: localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null,
//   },
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingAddress: localStorage.getItem("shippingAddress")
//       ? JSON.parse(localStorage.getItem("shippingAddress"))
//       : {},
//     paymentMethod: "PayPal",
//   },
// };

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducers, composeEnhancers(middleware));
export default store;
