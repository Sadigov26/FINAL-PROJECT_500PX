import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    userPhotos: [],
  },
  reducers: {
    setPhoto: (state, action) => {
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

export const {addPhoto,setPhoto,removePhoto } = photoSlice.actions;

export default photoSlice.reducer;
