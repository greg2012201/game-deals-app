import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITADOptions } from 'utils/fetchingOptions';
import { selectDataOptions } from 'utils/selectDataOptions';

const { url, key } = ITADOptions;

export const dealsApi = createApi({
  reducerPath: 'dealsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  endpoints: (builder) => ({
    getListCoveredRegions: builder.query({
      query: () => `v01/web/regions/`,
      transformResponse: (response) => {
        const countries = Object.entries(response.data).reduce((acc, curr) => {
          const country = curr[1].countries;
          return [...acc, ...country];
        }, []);
        return [
          { name: 'Region', options: Object.keys(response.data) },
          { name: 'Country', options: countries },
          ...selectDataOptions,
        ];
      },
    }),
    getDealsList: builder.query({
      query: ({ options: { region, country, price }, listSize }) => {
        return `v01/deals/list/?key=${key}&limit=${listSize}&region=${region}&country=${country}&sort=price:${price}`;
      },
      transformResponse: (response) => {
        const currency = response[Object.keys(response)[0]];
        const list = response.data.list.reduce(
          (
            acc,
            {
              title,
              plain,
              price_old: oldPrice,
              price_cut: discount,
              price_new: newPrice,
              urls: { buy },
              shop,
            }
          ) => {
            return [
              ...acc,
              {
                ...currency,
                ...{
                  title,
                  plain,
                  oldPrice: parseFloat(oldPrice.toFixed(2)),
                  discount,
                  newPrice: parseFloat(newPrice.toFixed(2)),
                  buy,
                  shop,
                },
              },
            ];
          },
          []
        );

        return { count: response.data.count, list };
      },
    }),
  }),
});
export const {
  useGetListCoveredRegionsQuery,
  useGetListCoveredStoresQuery,
  useGetDealsListQuery,
} = dealsApi;
