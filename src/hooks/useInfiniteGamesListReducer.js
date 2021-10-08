import { useReducer } from 'react';
const initialState = {
  page: 1,
  data: [],
  isEmpty: true,
  isLoading: false,
  hasError: false,
  hasNextPage: true,
  limit: null,
};
const actions = {
  init: 'INIT',
  setData: 'SET_DATA',
  loadMore: 'LOAD_MORE',
  resetOnUnmount: 'RESET_ON_UNMOUNT',
  setMetaData: 'SET_METADATA',
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.init: {
      return {
        ...state,
        isEmpty: true,
        isLoading: true,
      };
    }
    case actions.setData: {
      return {
        ...state,
        data: [...state.data, ...action.payload],
        isEmpty: false,
        isLoading: false,
      };
    }
    case actions.setMetaData: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actions.loadMore: {
      return { ...state, page: (state.page += 1), isLoading: true };
    }
    case actions.setError: {
      return { ...state, hasError: true, isLoading: false, isEmpty: true };
    }
    case actions.resetOnUnmount: {
      return { ...state, ...initialState };
    }
    default: {
      return state;
    }
  }
};
export const useInfiniteGamesListReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch, actions };
};
