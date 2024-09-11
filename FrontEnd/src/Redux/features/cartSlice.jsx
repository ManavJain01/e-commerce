import {createSlice, nanoid} from '@reduxjs/toolkit'

// Importing Axios Packages
import axios from 'axios'
import { useEffect } from 'react'

// Importing services
import { AddToCart, UpdateCart, DeleteFromCart } from '../../service/actionService'

const initialState = {
  // cartItems: [{id: 1, cartQty: 2, list: {item: 'honda city', company: 'honda', price: 19.93, packaging: 'Pack of 15 Units', quantity: 10}}],
  cartItems: [],
}

// let i = 0;

const addingInCart = async (data) => {
  await AddToCart(data);
}

const updatingCart = async (data, id) => {
  await UpdateCart(data, id);
}

const deleteFromCart = async (id) => {
  await DeleteFromCart(id);
}

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    creatingInitialState: (state = initialState, action) => {
      if(action.payload?.cart?.length == 0) state.cartItems = [];
      action.payload.cart?.map((e) => {
        if (!state.cartItems.find(cartItem => cartItem.id === e.id)) {
          state.cartItems.push(e);
        }
      })
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
        if(localStorage.getItem("authToken")) addingInCart(e);
      }
    },
    removeFromCart: (state, action) => {
      // i--;
      state.cartItems = state.cartItems.filter((e) => {
        if(localStorage.getItem("authToken") && e.list.item === action.payload.item) deleteFromCart(e.id);
        return e.list.item !== action.payload.item
      } )
    },
    updateCart: (state, action) => {
      state.cartItems.map((e) =>{
        if(e.list.item === action.payload.e.item){
          e.cartQty = action.payload.medicineQTY
          e.list = action.payload.e
          if(localStorage.getItem("authToken")) updatingCart(action.payload, e.id);
        }
      })

    }
  }
})

export const {creatingInitialState, addToCart, removeFromCart, updateCart} = cartSlice.actions

export default cartSlice.reducer