import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";
import postReducer from "./reducers/postReducer";
import locationReducer from "./reducers/locationReducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer:{
    posts: postReducer,
    categories: categoryReducer,
    userLocation: locationReducer
  },
  middleware: [thunk]
});

  