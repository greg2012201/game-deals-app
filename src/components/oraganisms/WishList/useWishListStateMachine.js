import { useReducer } from 'react'

const actionTypes = {
  hasListLoaded: 'HAS_LIST_LOADED',
  switchItem: 'SWITCH_ITEM',
  success: 'SUCCESS',
  rejected: 'REJECTED',
}
const initialState = {
  hasLoader: true,
  isItemSwitching: false,
  error: false,
}
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.hasListLoaded: {
      return {
        ...state,
        hasLoader: false,
        isItemSwitching: false,
      }
    }
    case actionTypes.switchItem: {
      return {
        ...state,
        hasLoader: false,
        isItemSwitching: true,
      }
    }
    case actionTypes.success: {
      return {
        ...state,
        isItemSwitching: false,
      }
    }
    case actionTypes.rejected: {
      return {
        ...state,
        hasLoader: false,
        isItemSwitching: false,
        error: true,
      }
    }

    default: {
      return state
    }
  }
}
export const useWishListStateMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { dispatch, actionTypes, state }
}
