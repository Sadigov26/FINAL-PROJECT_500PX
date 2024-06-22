import { apiSlice } from './apiSlice';

const USER_URL = '/api/users';

export const photoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method:"POST",
        body:data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/logout`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useLoginQuery,useLogoutMutation,useRegisterMutation } = photoApiSlice;
