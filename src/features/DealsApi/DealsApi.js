import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITADOptions } from 'utils/fetchingOptions'
import { selectDataOptions } from 'utils/selectDataOptions'

const { url, key } = ITADOptions

export const dealsApi = createApi({
  reducerPath: 'dealsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  endpoints: (builder) => ({
    getListCoveredRegions: builder.query({
      query: () => `v01/web/regions/`,
      transformResponse: (response) => {
        let countries = []

        Object.entries(response.data).map((item) => {
          return (countries = [...countries, ...item[1].countries])
        })

        return [{ name: 'Region', options: Object.keys(response.data) }, { name: 'Country', options: countries }, ...selectDataOptions]
      },
    }),
    getDealsList: builder.query({
      query: ({ region, country, price }) => `v01/deals/list/?key=${key}&region=${region}&country=${country}&sort=price:${price}`,
      transformResponse: (response) => {
        return { ...response[Object.keys(response)[0]], list: response.data.list }
      },
    }),
  }),
})
export const { useGetListCoveredRegionsQuery, useGetListCoveredStoresQuery, useGetDealsListQuery } = dealsApi
