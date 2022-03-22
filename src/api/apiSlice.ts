import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDataSlide } from '../interfaces/interfaces';


export const apiSlice = createApi({
    reducerPath: 'slideApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: builder => ({
        getSlides: builder.query<IDataSlide[], void>({
            query: () => "/slides",
        }),
    }),

});

export const {useGetSlidesQuery} = apiSlice;