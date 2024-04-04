import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  // cartItems: [{id: 1, cartQty: 2, list: {name: 'honda city', company: 'honda', MRP: 19.93, Units: 'Pack of 15 Units', QTY: 10}}],
  cartItems: [],
  stateItems: [{stateName: 'stateName', state: 'state'}]
}

let i = 2;

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isAvailable = false
      state.cartItems.map((item) =>{
        if(item.list.name === action.payload.name) isAvailable = true;
      })
      if(!isAvailable){
        const item = {
          id: i++,
          cartQty: 1,
          list: action.payload
        }
        state.cartItems.push(item)
      }
    },
    removeFromCart: (state, action) => {
      i--;
      state.cartItems = state.cartItems.filter((item) => item.list.name !== action.payload.name )
    },
    updateCart: (state, action) => {
      state.cartItems.map((item) =>{
        if(item.list.name === action.payload.e.name){
          item.cartQty = action.payload.medicineQTY
          item.list = action.payload.e
        }
      })
    },
    storeStates: (state, action) => {
      let isAvailable = false
      state.stateItems.map((item) =>{
        if(item.stateName === action.payload.name) isAvailable = true;
      })

      if(!isAvailable){
        const item = {
          stateName: action.payload.name,
          state: action.payload.state
        }

        state.stateItems.push(item)
      }
    }
  }
})

export const {addToCart, removeFromCart, updateCart, storeStates} = cartSlice.actions

export default cartSlice.reducer