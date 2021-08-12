import { configureStore } from '@reduxjs/toolkit'
import { dealsApi } from 'features/DealsApi/DealsApi'
import { dealsSlice } from 'features/DealsSlice/DealsSlice'

export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
    deals: dealsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware),
})
