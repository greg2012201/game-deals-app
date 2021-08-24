import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITADOptions } from 'utils/fetchingOptions'

const { url, key } = ITADOptions

export const wishListApi = createApi({
  reducerPath: 'wishListApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  tagTypes: ['wishList'],
  endpoints: (builder) => ({
    getActualPrices: builder.query({
      query: ({ plains }) => {
        let strings = []
        let joinedPlains = ''
        plains.map(({ plain }) => {
          strings.push(plain)
          return (joinedPlains = strings.join(','))
        })
        return `v01/game/overview/?key=${key}&plains=${joinedPlains}`
      },
      transformResponse: (response) => {
        const actualPrices = []
        for (const key in response.data) {
          actualPrices.push({
            plain: key,
            newPrice: response.data[key].price.price,
            discount: response.data[key].price.cut,
          })
        }

        return { actualPrices }
      },
      invalidatesTags: ['wishList'],
    }),
  }),
})

export const { useGetActualPricesQuery } = wishListApi
