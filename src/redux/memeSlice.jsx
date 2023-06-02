import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const memesURL = 'https://api.imgflip.com/get_memes';

const initialState = {
  isLoading: false,
  success: false,
  memesData: [],
};

export const fetchingMemesInfo = createAsyncThunk(
  'memes/fetchingMemesInfo',
  async () => {
    const response = await fetch(memesURL);
    const data = await response.json();
    return data;
  },
);

const memesSlice = createSlice({
  name: 'meme',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchingMemesInfo.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchingMemesInfo.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      memesData: action.payload.data.memes,
    }));
  },
});
export default memesSlice.reducer;
