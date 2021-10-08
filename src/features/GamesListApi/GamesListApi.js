import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RAWGOptions } from 'utils/fetchingOptions';
const { url, key } = RAWGOptions;
export const gamesListApi = createApi({
  reducerPath: 'gamesListApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getGamesList: builder.query({
      query: ({ endpoint, page = 1 }) => {
        return `${url}${endpoint}key=${key}&page=${page}`;
      },
      transformResponse: ({ count, next, results, limit }) => {
        return { count, next, results, limit };
      },
    }),
  }),
});
export const { useGetGamesListQuery } = gamesListApi;
