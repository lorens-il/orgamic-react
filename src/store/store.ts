import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import activeBtn from "../components/featuredProducts/featuredProductsSlice";


export const store = configureStore({
    reducer: {
        activeBtn,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;