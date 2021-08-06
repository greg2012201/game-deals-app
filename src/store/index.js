import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITADOptions } from 'utils/fetchingOptions'
const categories = [
  { name: 'Store', options: ['gog', 'steam'] },
  { name: 'Price', options: ['asc', 'desc'] },
]

const { url } = ITADOptions

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

        return [{ name: 'Region', options: Object.keys(response.data) }, { name: 'Country', options: countries }, ...categories]
      },
    }),
  }),
})
export const { useGetListCoveredRegionsQuery, useGetListCoveredStoresQuery, useTestMutation } = dealsApi

export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware),
})
