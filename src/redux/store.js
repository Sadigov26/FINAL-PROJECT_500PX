import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import photoSlice from "./slices/photoSlice.js";
import { apiSlice } from "./slices/apiSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        photo: photoSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;