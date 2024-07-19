import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

let i = users.length;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      let isAvailable = false
      state.users.map((item) =>{
        if(item.name === action.payload) isAvailable = true;
      })
      if(!isAvailable){
        const user = {
          id: i++,
          name: action.payload.name,
          phnNo: action.payload.phone,
          address: "",
        }
        state.users.push(user)
      }
    },
    removeUser: (state, action) => {
      i--;
      state.users = state.users.filter((item) => item.name !== action.payload )
    },
    updateUser: (state, action) => {
      state.users.map((item) =>{
        if(item.name === action.payload){
          item.name = action.payload.name
          item.phnNo = action.payload.phone
          item.address = action.payload.address
        }
      })
    }
  }
})

export const {addUser, removeUser, updateUser} = userSlice.actions

export default userSlice.reducer