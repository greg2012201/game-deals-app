import { useReducer } from 'react'

const actionTypes = {
  incrementListSize: 'INCREMENT_LIST_SIZE',
  resetListSize: 'RESET_LIST_SIZE',
  setInitialLoader: 'SET_INITIAL_LOADER',
  setData: 'SET_DATA',
  setError: 'SET_ERROR',
}
export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_LIST_SIZE': {
      return {
        ...state,
        listSize: state.listSize + action.payload,
      }
    }
    case 'RESET_LIST_SIZE': {
      return {
        ...state,
        listSize: (state.listSize = 0),
      }
    }
    case 'SET_INITIAL_LOADER': {
      return {
        ...state,
        hasInitialLoader: action.payload,
      }
    }
    case 'SET_DATA': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'SET_ERROR': {
      return {
        ...state,
        data: { ...state.data, isError: action.payload },
      }
    }
    default: {
      return state
    }
  }
}
export const useDealsListInfiniteScrollReducer = ({ initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { dispatch, actionTypes, state }
}
