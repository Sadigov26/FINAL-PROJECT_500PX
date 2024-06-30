import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state , action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
        // Yeni bir reducer ekleyerek userInfo'nin isAdmin alanını güncelleyebiliriz
        updateUserAdminStatus: (state, action) => {
            state.userInfo.isAdmin = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        }
    }
});

export const { setCredentials, logout, updateUserAdminStatus } = authSlice.actions;

export default authSlice.reducer;
