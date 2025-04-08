import {configureStore} from '@reduxjs/toolkit';
import outfitReducer from './reducers/outfit/outfit';

const store = configureStore({
  reducer: {
    outfit: outfitReducer,
  },
});

export default store;
