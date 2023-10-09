// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userslice";
import userCart from "./slices/cartslice";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import userReducer from "./reducers/index";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: userCart,
  },
});
export default store;
