import { configureStore } from '@reduxjs/toolkit'
import { dealsApi } from 'features/DealsApi/DealsApi'

export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware),
})
