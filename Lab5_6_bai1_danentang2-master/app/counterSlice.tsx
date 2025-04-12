import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// Action để reset counter
export const RESET_COUNTER = createAction('counter/resetCounter');

// Initial state
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Tạo slice với các reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiply: (state, action: PayloadAction<number>) => {
      state.value *= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RESET_COUNTER, (state) => {
      state.value = 0;
    });
  },
});

// Export actions
export const { increment, decrement, multiply } = counterSlice.actions;

// Export selector
export const selectCount = (state: RootState) => state.counter.value;

// Export reducer
export default counterSlice.reducer;