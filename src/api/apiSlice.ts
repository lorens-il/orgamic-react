import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IDataSlide, IDataDiscount, IDataProduct } from '../interfaces/interfaces';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    tagTypes: ["Products"],
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
        getFilters: builder.query<string[], void>({
            query: () => "/filters",
        }),
        getCart: builder.query<IDataProduct[], void>({
            query: () => "/cart",
            providesTags: ["Products"]
        }),
        addingProduct: builder.mutation<IDataProduct[], IDataProduct>({
            query: product => ({
                url: "/cart",
                method: "POST",
                body: product
            }),
            invalidatesTags: ["Products"]
        }),
        deleteProduct: builder.mutation<IDataProduct[], string | number>({
            query: id => ({
                url: `/cart/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        })
    }),

});

export const {
                useGetSlidesQuery,
                useGetDiscountsQuery,
                useGetProductsQuery,
                useGetFiltersQuery,
                useGetCartQuery,
                useAddingProductMutation,
                useDeleteProductMutation
            } = apiSlice;