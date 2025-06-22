import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import outfit from './reducers/outfit';
import account from './reducers/account';

const accountPersistConfig = {
  key: 'account',
  storage: AsyncStorage,
  whitelist: ['email', 'token', 'isToken'],
};

const persistedAccountReducer = persistReducer(accountPersistConfig, account);

export const store = configureStore({
  reducer: {
    outfit,
    account: persistedAccountReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
