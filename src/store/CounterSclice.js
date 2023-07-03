import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  Login: false,
};

const Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {    //functions
    increment: (state) => {
      state.value = state.value + 1; //not accectpable by react
    },
    decrement: (state) => {
      state.value -= 1;  
    },
    incrementPayload: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, incrementPayload } = Counter.actions;

export default Counter.reducer;
