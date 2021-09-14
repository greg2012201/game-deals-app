import { createSlice } from '@reduxjs/toolkit';

export const errorsSlice = createSlice({
  name: 'errors',
  initialState: { isError: false, errorMessage: '' },
  reducers: {
    checkHasErrors(state, action) {
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
      };
    },
  },
});
export const { checkHasErrors } = errorsSlice.actions;
