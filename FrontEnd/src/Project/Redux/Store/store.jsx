import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import stateReducer from '../features/stateSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  state: stateReducer
})

export const store = configureStore({
  reducer:  rootReducer
})