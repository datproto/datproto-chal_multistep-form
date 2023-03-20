import { configureStore } from '@reduxjs/toolkit'

import formSliceReducer from '@/reducers/formReducer'
import navSliceReducer from '@/reducers/navReducer'

const store = configureStore({
  reducer: {
    form: formSliceReducer,
    nav: navSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
