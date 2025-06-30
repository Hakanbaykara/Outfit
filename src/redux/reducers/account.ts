// src/redux/reducers/account.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AccountState {
  email: string;
  isToken: boolean;
}

const initialState: AccountState = {
  email: '',
  isToken: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setIsToken: (state, action: PayloadAction<boolean>) => {
      state.isToken = action.payload;
    },
  },
});

export const {setEmail, setIsToken} = accountSlice.actions;
export default accountSlice.reducer;
