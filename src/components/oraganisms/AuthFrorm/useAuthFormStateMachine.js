const { useReducer } = require('react');

const initialState = {
  isLoading: false,
  hasError: false,
};
const actionTypes = {
  submit: 'SUBMIT',
  success: 'SUCCESS',
  rejected: 'REJECTED',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.submit: {
      return { ...state, isLoading: true, hasError: false };
    }
    case actionTypes.success: {
      return { ...state, isLoading: false, hasError: false };
    }
    case actionTypes.rejected: {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
export const useAuthFormStateMachine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { actionTypes, state, dispatch };
};
