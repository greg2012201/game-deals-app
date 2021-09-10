import { createSlice } from '@reduxjs/toolkit';
import { initialSelectsState } from 'utils/selectDataOptions';
const initialState = {
  listSize: 0,
  hasInitialLoader: true,
  nextSortOptions: initialSelectsState,
  currSortOptions: initialSelectsState,
  isSortOptionLoading: true,
  data: {
    list: [],
    isLoading: true,
    hasMoreItems: true,
    isError: false,
    error: '',
  },
};
export const dealsInfiniteScrollSlice = createSlice({
  name: 'dealsInfiniteScroll',
  initialState: initialState,
  reducers: {
    setNextSortOptions(state, action) {
      return { ...state, nextSortOptions: action.payload };
    },
    setCurrSortOptions(state, action) {
      return { ...state, currSortOptions: action.payload };
    },
    loadMore(state, action) {
      return { ...state, listSize: state.listSize + action.payload };
    },
    setIsSortOptionLoading(state, action) {
      return { ...state, isSortOptionLoading: action.payload };
    },
    resetOnSortOptionChange(state) {
      return {
        ...state,
        ...{
          listSize: 0,
          hasInitialLoader: true,
          data: {
            ...initialState.data,
          },
        },
      };
    },
    resetOnUnmount(state) {
      return {
        ...state,
        ...initialState,
      };
    },
    setInitialLoader(state, action) {
      return { ...state, hasInitialLoader: action.payload };
    },
    setData(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    },
    setError(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          isError: true,
          error: action.payload,
          isLoading: false,
          hasMoreItems: false,
        },
      };
    },
  },
});
export const {
  setData,
  loadMore,
  setInitialLoader,
  setIsSortOptionLoading,
  setNextSortOptions,
  setCurrSortOptions,
  resetOnSortOptionChange,
  resetOnUnmount,
  setError,
} = dealsInfiniteScrollSlice.actions;
