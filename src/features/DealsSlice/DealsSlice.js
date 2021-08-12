import { createSlice } from '@reduxjs/toolkit'
import { initialSelectsState } from 'utils/selectDataOptions'

export const dealsSlice = createSlice({
  name: 'deals',
  initialState: initialSelectsState,
  reducers: {
    takeSelections(state, action) {
      return (state = action.payload)
    },
  },
})
export const { takeSelections } = dealsSlice.actions
