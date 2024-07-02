import {createSlice, nanoid} from '@reduxjs/toolkit'

// Importing Axios Packages
import axios from 'axios'

const initialState = {
  // cartItems: [{id: 1, cartQty: 2, list: {item: 'honda city', company: 'honda', price: 19.93, packaging: 'Pack of 15 Units', quantity: 10}}],
  cartItems: [],
}

// let i = 0;

let userId = ""

const updatingCart = async (data, message) => {
  const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/updateCart`, { data: data, message: message })
}

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    creatingInitialState: (state, action) => {
      console.log("action.payload");
      console.log(action.payload);
      // state.cartItems.push(action.payload);
    },
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
        
        updatingCart(e, "add");
        console.log("addToCart running");
      }
    },
    removeFromCart: (state, action) => {
      // i--;
      state.cartItems = state.cartItems.filter((e) => e.list.item !== action.payload.item )
      // updatingCart(action.payload.item, "remove");
      // console.log("removeFromCart running");

    },
    updateCart: (state, action) => {
      state.cartItems.map((e) =>{
        if(e.list.item === action.payload.e.item){
          e.cartQty = action.payload.medicineQTY
          e.list = action.payload.e
          updatingCart(e, "update");
          console.log("updateCart running");
        }
      })

    }
  }
})

export const {creatingInitialState, addToCart, removeFromCart, updateCart} = cartSlice.actions

export default cartSlice.reducer