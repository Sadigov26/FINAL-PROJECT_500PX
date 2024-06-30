// Example of usersReducer
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [], // Ensure users is initialized as an empty array
    loading: false,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess(state, action) {
            state.loading = false;
            state.users = action.payload; // Assuming action.payload is an array of users
        },
        fetchUsersFailure(state, action) {
            state.loading = false;
            state.error = action.payload; // Assuming action.payload contains error information
        }
    }
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions;
export default usersSlice.reducer;
