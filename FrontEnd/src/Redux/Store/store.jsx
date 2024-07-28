import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import stateReducer from '../features/stateSlice'
import userReducer from '../features/userSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  state: stateReducer,
  user: userReducer
})

export const store = configureStore({
  reducer:  rootReducer
})