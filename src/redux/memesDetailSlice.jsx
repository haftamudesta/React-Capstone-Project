import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from "axios";

const memesURL = 'https://api.imgflip.com/get_memes';

const initialState = {
  isLoading: false,
  success: false,
  memesData: {},
};

export const fetchMemesDetail = createAsyncThunk(
  'memes/fetchingMemesInfo',
  async (id) => {
    try {
      const response = await fetch(`${memesURL}${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const memesSlice = createSlice({
  name: 'memesDetail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMemesDetail.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchMemesDetail.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      memesData: action.payload.data.memes,
    }));
  },
});
export default memesSlice.reducer;
