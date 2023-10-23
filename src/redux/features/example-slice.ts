import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterExample = createSlice({
  name: "counterExample",
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value++;
    },
    reset: state => initialState,
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, reset, increaseByAmount} = counterExample.actions;
export default counterExample.reducer;