import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  stateItems: [{stateName: 'stateName'}]
}

export const stateSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    
  }
})

export const {storeStates} = stateSlice.actions
export default stateSlice.reducer