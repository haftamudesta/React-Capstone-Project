import { configureStore } from '@reduxjs/toolkit';
import memesReducer from './memeSlice';

const store = configureStore({
  reducer: {
    memess: memesReducer,
  },
});
export default store;
