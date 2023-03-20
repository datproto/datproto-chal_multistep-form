import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IPlan } from '@/types/planType'
import { IUser } from '@/types/userType'

const userState = {
  name: '',
  email: '',
  phone: '',
} as IUser

const initialState = {
  user: userState,
  plan: {
    name: '',
    type: '',
    price: 0,
    addOns: [{
      name: '',
      description: '',
      price: 0,
    }],
  } as IPlan,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormUser: (state, action: PayloadAction<IUser>) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload
    },
  },
})

export const { addFormUser } = formSlice.actions
export default formSlice.reducer
