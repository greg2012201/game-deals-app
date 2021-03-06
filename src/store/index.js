import { configureStore } from '@reduxjs/toolkit';
import { dealsApi } from 'features/DealsApi/DealsApi';
import { dealsInfiniteScrollSlice } from 'features/DealsInfiniteScrollSlice/DealsInfiniteScrollSlice';
import { errorsSlice } from 'features/errorSlice/errorsSlice';
import { gamesListApi } from 'features/GamesListApi/GamesListApi';
import { wishListApi } from 'features/WishListApi/WishListApi';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
export const store = configureStore({
  reducer: {
    [dealsApi.reducerPath]: dealsApi.reducer,
    [wishListApi.reducerPath]: wishListApi.reducer,
    [gamesListApi.reducerPath]: gamesListApi.reducer,
    dealsInfiniteScroll: dealsInfiniteScrollSlice.reducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    errors: errorsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dealsApi.middleware, wishListApi.middleware, gamesListApi.middleware),
});
