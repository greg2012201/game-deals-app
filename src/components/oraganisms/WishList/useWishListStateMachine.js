import { useReducer } from 'react';

const actionTypes = {
  hasListLoaded: 'HAS_LIST_LOADED',
  checkHasItems: 'CHECK_HAS_ITEMS',
  success: 'SUCCESS',
  rejected: 'REJECTED',
};
const initialState = {
  hasLoader: true,
  error: false,
  isEmpty: true,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.hasListLoaded: {
      return {
        ...state,
        hasLoader: false,
        isItemSwitching: false,
      };
    }
    case actionTypes.checkHasItems: {
      return {
        ...state,
        isEmpty: action.payload.length === 0,
      };
    }

    case actionTypes.success: {
      return {
        ...state,
        hasLoader: false,
        error: false,
      };
    }
    case actionTypes.rejected: {
      return {
        ...state,
        hasLoader: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
export const useWishListStateMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { dispatch, actionTypes, state };
};
