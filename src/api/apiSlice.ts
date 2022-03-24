import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDataSlide, IDataDiscount } from '../interfaces/interfaces';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: builder => ({
        getSlides: builder.query<IDataSlide[], void>({
            query: () => "/slides",
        }),
        getDiscounts: builder.query<IDataDiscount[], void>({
            query: () => "/discounts",
        })
    }),

});

export const {
                useGetSlidesQuery,
                useGetDiscountsQuery  
            } = apiSlice;