// src/redux/reducers/outfit.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OutfitState {
  value: number;
}

const initialState: OutfitState = {value: 0};

const outfitSlice = createSlice({
  name: 'outfit',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = outfitSlice.actions;
export default outfitSlice.reducer;
