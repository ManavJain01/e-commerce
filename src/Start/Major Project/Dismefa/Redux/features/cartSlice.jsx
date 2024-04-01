import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  // cartItems: [{id: 1, list: {name: 'honda city', company: 'honda', MRP: 19.93, Units: 'Pack of 15 Units', QTY: 10}}]
  cartItems: []
}

let i = 2;

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.map((item) =>{
        if(item.name === action.payload.name) return
      })

      const item = {
        id: i++,
        list: action.payload
      }
      state.cartItems.push(item)
      // console.log(state.cartItems)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.name !== action.payload.name )
      // console.log(state.cartItems)
    },
    updateCart: (state, action) => {
      state.cartItems.map((item) =>{
        if(item.id === action.payload[1]){
          item.text = action.payload[0]
        }
      })
    },
    showCart: (state, action) => {
      return state.cartItems
    }
  }
})

export const {addToCart, removeFromCart, updateCart, showCart} = cartSlice.actions

export default cartSlice.reducer