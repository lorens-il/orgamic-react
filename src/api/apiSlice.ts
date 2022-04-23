import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IDataSlide, IDataDiscount, IDataProduct, IDataFilters } from '../interfaces/interfaces';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: builder => ({
        getSlides: builder.query<IDataSlide[], void>({
            query: () => "/slides",
        }),
        getDiscounts: builder.query<IDataDiscount[], void>({
            query: () => "/discounts",
        }),
        getProducts: builder.query<IDataProduct[], void>({
            query: () => "/products",
        }),
        getFilters: builder.query<IDataFilters[], void>({
            query: () => "/filters",
        })
    }),

});

export const {
                useGetSlidesQuery,
                useGetDiscountsQuery,
                useGetProductsQuery,
                useGetFiltersQuery 
            } = apiSlice;