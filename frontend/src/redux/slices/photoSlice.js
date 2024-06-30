import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userPhotos: [],
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.userPhotos = action.payload;
    },
    addPhoto: (state, action) => {
      state.userPhotos.push(action.payload);
    },
    removePhoto: (state, action) => {
      state.userPhotos = state.userPhotos.filter(photo => photo._id !== action.payload);
    },
  },
});

export const { addPhoto, setPhotos, removePhoto } = photoSlice.actions;
export default photoSlice.reducer;
