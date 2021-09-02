import { configureStore } from '@reduxjs/toolkit'
import { dealsApi } from 'features/DealsApi/DealsApi'
import { dealsListOptionsSlice } from 'features/DealsOptionsSlice/DealsListOptionsSlice'
import { wishListApi } from 'features/WishListApi/WishListApi'
import 'firebase/firestore'
import { firestoreReducer } from 'redux-firestore'
export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
    [wishListApi.reducerPath]: wishListApi.reducer,
    dealsListOptions: dealsListOptionsSlice.reducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware, wishListApi.middleware),
})
