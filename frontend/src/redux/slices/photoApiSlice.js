import { apiSlice } from './apiSlice';

const USER_URL = '/api/photos';

export const photoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => ({
        url: `${USER_URL}/`,
        method: 'GET',
      }),
    }),
    addPhoto: builder.mutation({
      query: (photo) => ({
        url: `${USER_URL}/`,
        method: 'POST',
        body: photo,
      }),
    }),
    deletePhoto: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useDeletePhotoMutation, useAddPhotoMutation, useGetPhotosQuery } = photoApiSlice;
