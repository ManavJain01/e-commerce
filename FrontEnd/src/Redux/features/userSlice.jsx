import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      let isAvailable = false
      if(state.user.id === action.payload?._id) isAvailable = true

      if(!isAvailable){
        const user = {
          address: action.payload?.address,
          age: action.payload?.age,
          email: action.payload?.email,
          gender: action.payload?.gender,
          _id: action.payload._id,
          name: action.payload?.name,
          phone: action.payload.phone,
        }
        state.user = user
      }
    },
    removeUser: (state) => {
      state.user = {}
    },
    updateUser: (state, action) => {
      state.user.address = action.payload?.address,
      state.user.age = action.payload?.age,
      state.user.email = action.payload?.email,
      state.user.gender = action.payload?.gender,
      state.user._id = action.payload._id,
      state.user.name = action.payload?.name,
      state.user.phone = action.payload.phone
    }
  }
})

export const {addUser, removeUser, updateUser} = userSlice.actions

export default userSlice.reducer