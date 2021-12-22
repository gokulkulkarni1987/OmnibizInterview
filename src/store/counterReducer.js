import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment: state => {
      state.count++;
    },
    decrement: state => {
      state.count--;
    },
  },
});

const {actions} = counterSlice;

export const {increment, decrement} = actions;

export default counterSlice.reducer;
