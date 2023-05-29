import { configureStore } from '@reduxjs/toolkit';
import memesReducer from './memeSlice';

const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});
export default store;
