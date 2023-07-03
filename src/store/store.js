import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSclice";

export const Store = configureStore({
  reducer: {
    number: CounterReducer,
  },
});
