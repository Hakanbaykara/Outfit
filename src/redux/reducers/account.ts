// src/redux/reducers/account.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AccountState {
  email: string;
  token: string;
  isToken: boolean;
}

const initialState: AccountState = {
  email: '',
  token: '',
  isToken: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsToken: (state, action: PayloadAction<boolean>) => {
      state.isToken = action.payload;
    },
  },
});

export const {setEmail} = accountSlice.actions;
export default accountSlice.reducer;
