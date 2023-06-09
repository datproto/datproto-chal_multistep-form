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
    type: 'mo',
    price: 0,
    addOns: [],
  } as IPlan,
  finish: false,
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
        price: action.payload.plan.price,
      },
    }),
    choosePlanType: (state, action: PayloadAction<any>) => ({
      ...state,
      plan: {
        ...state.plan,
        type: action.payload.planType,
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
    finishForm: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.finish = action.payload
    },
  },
})

export const {
  addFormUser, finishForm, choosePlan, chooseAddOns, removeAddOns, choosePlanType,
} = formSlice.actions
export default formSlice.reducer
