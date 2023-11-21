import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {INews} from "../models/INews";
import {ISelectFilter} from "../models/ISelectFilter";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
       baseUrl: 'https://newsapi.org/v2'
    }),
// /top-headlines?country=${data.country}&category=${data.category}&apiKey=264925e19da143ea9035bea17a499558
    tagTypes: ['News'],
    endpoints: (build) => ({
        getNews: build.query<INews, ISelectFilter>({
            query: (data) => ({
               url: `/top-headlines?country=${data.country}&category=${data.category}&apiKey=c626c190777d4c27bf346b74c73c02d5`,
            }),
        })
    })
})