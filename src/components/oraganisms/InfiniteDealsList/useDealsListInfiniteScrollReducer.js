import { useReducer } from 'react';
const initialState = {
  listSize: 0,
  hasInitialLoader: true,
  data: { list: [], isLoading: true, hasMoreItems: true, isError: false },
};
export const useDealsListInfiniteScrollReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { dispatch, actionTypes, state };
};
const actionTypes = {
  setInitialLoader: 'SET_INITIAL_LOADER',
  loadMore: 'LOAD_MORE',
  updateSortOptions: 'UPDATE_SORT_OPTIONS',
  setData: 'SET_DATA',
  reset: 'RESET',
  setError: 'SET_ERROR',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_LOADER': {
      return {
        ...state,
        hasInitialLoader: action.payload,
      };
    }
    case 'LOAD_MORE': {
      return {
        ...state,
        listSize: state.listSize + action.incrementValue,
      };
    }
    case 'UPDATE_SORT_OPTIONS': {
      return {
        ...state,
        updatedOptions: action.payload,
      };
    }
    case 'SET_DATA': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        data: { ...state.data, isError: action.payload },
      };
    }
    case 'RESET': {
      return {
        ...state,
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};
