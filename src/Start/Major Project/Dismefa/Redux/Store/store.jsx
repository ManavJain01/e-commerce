import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import stateReducer from '../features/stateSlice'

export const store = configureStore({
  reducer: cartReducer,
  stateItems: stateReducer
})