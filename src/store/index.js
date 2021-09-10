import { configureStore } from '@reduxjs/toolkit';
import { dealsApi } from 'features/DealsApi/DealsApi';
import { dealsInfiniteScrollSlice } from 'features/DealsInfiniteScrollSlice/DealsInfiniteScrollSlice';
import { wishListApi } from 'features/WishListApi/WishListApi';
import 'firebase/firestore';
import { firestoreReducer } from 'redux-firestore';
export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
    [wishListApi.reducerPath]: wishListApi.reducer,
    dealsInfiniteScroll: dealsInfiniteScrollSlice.reducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dealsApi.middleware, wishListApi.middleware),
});
