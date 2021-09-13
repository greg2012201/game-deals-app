import { useReducer } from 'react';

const actionTypes = {
  hasListLoaded: 'HAS_LIST_LOADED',
  success: 'SUCCESS',
  rejected: 'REJECTED',
  updatePrices: 'UPDATE_PRICES',
};
const initialState = {
  hasLoader: true,
  error: false,
  data: [],
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
    case actionTypes.updatePrices: {
      const transformedData = action.payload.wishList.reduce((acc, curr, index) => {
        return [
          ...acc,
          {
            ...curr,
            ...action.payload.pricesData.actualPrices[index],
          },
        ];
      }, []);
      return {
        ...state,
        data: transformedData,
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
