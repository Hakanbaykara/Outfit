// src/redux/reducers/account.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AccountState {
  email: string;
  password: string;
  agreedTerms: boolean;
  isToken: boolean;
}

const initialState: AccountState = {
  email: '',
  password: '',
  agreedTerms: false,
  isToken: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAgreedTerms: (state, action: PayloadAction<boolean>) => {
      state.agreedTerms = action.payload;
    },
    setIsToken: (state, action: PayloadAction<boolean>) => {
      state.isToken = action.payload;
    },
  },
});

export const {setEmail} = accountSlice.actions;
export default accountSlice.reducer;
