/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
