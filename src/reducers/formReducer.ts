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
    addOns: [],
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
    choosePlan: (state, action: PayloadAction<any>) => ({
      ...state,
      plan: {
        ...state.plan,
        name: action.payload.plan.name,
        type: action.payload.plan.type,
        price: action.payload.plan.price,
      },
    }),
    chooseAddOns: (state, action: PayloadAction<any>) => {
      const chosenAddOn = action.payload.addOns

      if (state.plan.addOns.length === 0) {
        return {
          ...state,
          plan: {
            ...state.plan,
            addOns: [chosenAddOn],
          },
        }
      }
      return {
        ...state,
        plan: {
          ...state.plan,
          addOns: [...state.plan.addOns, chosenAddOn],
        },
      }
    },
    removeAddOns: (state, action: PayloadAction<any>) => {
      state.plan.addOns.forEach((addOn, index) => {
        if (addOn.name === action.payload.addOns.name) {
          state.plan.addOns.splice(index, 1)
        }
      })
    },
  },
})

export const {
  addFormUser, choosePlan, chooseAddOns, removeAddOns,
} = formSlice.actions
export default formSlice.reducer
