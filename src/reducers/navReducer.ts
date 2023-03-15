import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NavType } from '@/types/navType'

const initialState = {
  items: [
    { id: 1, name: 'Personal info', active: true },
    { id: 2, name: 'Select your plan', active: false },
    { id: 3, name: 'Contact', active: false }],
} as NavType

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changeActiveItem: (state, action: PayloadAction<number>) => {
      const currentActiveItem = state.items.find((item) => item.active)
      if (currentActiveItem) {
        currentActiveItem.active = false
      }
      const newActiveItem = state.items.find((item) => item.id === action.payload)
      if (newActiveItem) {
        newActiveItem.active = true
      }
    },
  },
})

export const { changeActiveItem } = navSlice.actions
export default navSlice.reducer
