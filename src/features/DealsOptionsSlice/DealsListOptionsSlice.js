import { createSlice } from '@reduxjs/toolkit'
import { initialSelectsState } from 'utils/selectDataOptions'

export const dealsListOptionsSlice = createSlice({
  name: 'dealsListOptions',
  initialState: initialSelectsState,
  reducers: {
    takeSelections(state, action) {
      return { ...state, ...action.payload }
    },
  },
})
export const { takeSelections } = dealsListOptionsSlice.actions
