// src/redux/store.ts
import {configureStore} from '@reduxjs/toolkit';
import outfit from './reducers/outfit';

export const store = configureStore({reducer: {outfit}});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
