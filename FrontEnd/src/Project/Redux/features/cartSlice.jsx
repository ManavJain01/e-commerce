import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  // cartItems: [{id: 1, cartQty: 2, list: {item: 'honda city', company: 'honda', price: 19.93, packaging: 'Pack of 15 Units', quantity: 10}}],
  cartItems: [],
}

// let i = 0;

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isAvailable = false
      state.cartItems.map((e) =>{
        if(e.list.item === action.payload.item) isAvailable = true;
      })
      if(!isAvailable){
        const e = {
          id: nanoid(),
          cartQty: 1,
          list: action.payload
        }
        state.cartItems.push(e)
      }
    },
    removeFromCart: (state, action) => {
      // i--;
      state.cartItems = state.cartItems.filter((e) => e.list.item !== action.payload.item )
    },
    updateCart: (state, action) => {
      state.cartItems.map((e) =>{
        if(e.list.item === action.payload.e.item){
          e.cartQty = action.payload.medicineQTY
          e.list = action.payload.e
        }
      })
    }
  }
})

export const {addToCart, removeFromCart, updateCart} = cartSlice.actions

export default cartSlice.reducer