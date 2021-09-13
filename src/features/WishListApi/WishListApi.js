import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITADOptions } from 'utils/fetchingOptions';

const { url, key } = ITADOptions;

export const wishListApi = createApi({
  reducerPath: 'wishListApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  tagTypes: ['wishList'],
  endpoints: (builder) => ({
    getActualPrices: builder.query({
      query: ({ plains }) => {
        const joinedPlains = plains
          .reduce((acc, curr) => {
            const { plain } = curr;
            return [...acc, plain];
          }, [])
          .join(',');

        return `v01/game/overview/?key=${key}&plains=${joinedPlains}`;
      },
      transformResponse: (response) => {
        const actualPrices = Object.values(response.data).reduce((acc, curr, index) => {
          return [
            ...acc,

            {
              plain: Object.keys(response.data)[index],
              isExpired: !curr.price,
              ...(curr.price && { discount: curr.price.cut, newPrice: curr.price.price }),
            },
          ];
        }, []);
        return { actualPrices };
      },
      invalidatesTags: ['wishList'],
    }),
  }),
});

export const { useGetActualPricesQuery } = wishListApi;
