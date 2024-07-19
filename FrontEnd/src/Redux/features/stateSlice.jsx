import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  // stateItems: [{stateName: 'stateName', state: 'state', setState: 'setState'}]
  stateItems: []
}

export const stateSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    storeStates: (state, action) => {
      let isAvailable = false;
      state.stateItems.map((item) =>{
        if(item.stateName === action.payload.stateName) isAvailable = true;
      })
    
      if(!isAvailable){
        const item = {
          stateName: action.payload.stateName,
          state: action.payload.state,
          message: ""
        }
    
        state.stateItems.push(item)
      }
    },
    updateState: (state, action) => {
      state.stateItems.map((item) => {
        if(item.stateName == action.payload.stateName){
          item.message = action.payload.message;
        }
      })
    }
  }
})

export const { storeStates, updateState } = stateSlice.actions

export default stateSlice.reducer