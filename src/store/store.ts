import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import activeBtn from "../components/featuredProducts/featuredProductsSlice";


export const store = configureStore({
    reducer: {
        activeBtn,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})
