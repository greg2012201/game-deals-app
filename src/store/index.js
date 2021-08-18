import { configureStore } from '@reduxjs/toolkit'
import { dealsApi } from 'features/DealsApi/DealsApi'
import { dealsListOptionsSlice } from 'features/DealsOptionsSlice/DealsListOptionsSlice'

export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
    dealsListOptions: dealsListOptionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware),
})
