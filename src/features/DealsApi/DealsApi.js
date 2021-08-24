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
          const country = item[1].countries
          return (countries = [...countries, ...country])
        })

        return [{ name: 'Region', options: Object.keys(response.data) }, { name: 'Country', options: countries }, ...selectDataOptions]
      },
    }),
    getDealsList: builder.query({
      query: ({ options: { region, country, price }, listSize }) => {
        return `v01/deals/list/?key=${key}&limit=${listSize}&region=${region}&country=${country}&sort=price:${price}`
      },
      transformResponse: (response) => {
        const list = []
        const currency = response[Object.keys(response)[0]]
        response.data.list.map(({ title, plain, price_old: oldPrice, price_cut: discount, price_new: newPrice, urls: { buy }, shop }) =>
          list.push({ ...currency, ...{ title, plain, oldPrice, discount, newPrice, buy, shop } })
        )
        return { count: response.data.count, list }
      },
    }),
  }),
})
export const { useGetListCoveredRegionsQuery, useGetListCoveredStoresQuery, useGetDealsListQuery } = dealsApi
