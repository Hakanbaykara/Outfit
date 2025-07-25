// src/redux/reducers/account.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {clearToken} from '@/utils/authStorage';

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
    reset: state => {
      clearToken();
      setEmail('');
      state.isToken = false;
    },
  },
});

export const {setEmail, setIsToken, reset} = accountSlice.actions;
export default accountSlice.reducer;
