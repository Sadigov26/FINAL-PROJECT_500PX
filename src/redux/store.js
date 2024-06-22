import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import photoSlice from "./slices/photoSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        todos: photoSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
