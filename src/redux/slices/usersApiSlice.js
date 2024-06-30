import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST'
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: 'POST',
        body: data
      })
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data
      })
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
        method: 'GET'
      })
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/all`,
        method: 'GET'
      })
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/all/${id}`,
        method: 'DELETE'
      })
    }),
    updateUserByAdmin: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${USERS_URL}/all/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/forgot-password`,
        method: 'POST',
        body: data,
      }),
    }),
    sendVerificationEmail: builder.mutation({
      query: (data) => ({
        url: '/api/send-verification-email',
        method: 'POST',
        body: data,
      }),
    }),
    confirmEmail: builder.mutation({
      query: ({ email, code }) => ({
        url: `${USERS_URL}/confirm`,
        method: 'POST',
        body: { email, code },
      }),
    }),
  }),
});

export const {
  useUpdateUserByAdminMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useLoginMutation,
  useSendVerificationEmailMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGetUserProfileQuery,
  useConfirmEmailMutation, // Add this hook for confirming email
} = userApiSlice;
