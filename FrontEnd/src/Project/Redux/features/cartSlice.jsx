import {createSlice, nanoid} from '@reduxjs/toolkit'

// Importing Axios Packages
import axios from 'axios'
import { useEffect } from 'react'

const initialState = {
  // cartItems: [{id: 1, cartQty: 2, list: {item: 'honda city', company: 'honda', price: 19.93, packaging: 'Pack of 15 Units', quantity: 10}}],
  cartItems: [],
}

// let i = 0;

const addingInCart = async (data) => {
  await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/AddToCart`, {id: localStorage.getItem("id"), data: data})
}

const updatingCart = async (data, id) => {
  await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/UpdatingCart`, {id: localStorage.getItem("id"), itemId: id, data: data})
}

const deleteFromCart = async (id) => {
  await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/deleteFromCart`, {id: localStorage.getItem("id"), itemId: id})
}

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    creatingInitialState: (state = initialState, action) => {
      action.payload.data?.map((e, i) => {
        state.cartItems.push(e);
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