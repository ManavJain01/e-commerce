import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  // stateItems: [{stateName: 'stateName', state: 'state', setState: 'setState'}]
  loading: false,
  openLoginPage: false,
  stateItems: []
}

let count = 0;

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
    },

    setOpenLoginPage: (state, action) => {      
      if(action.payload === true) state.openLoginPage = true;
      else state.openLoginPage = false;
    },

    setLoading: (state) => {
      count++;
      state.loading = true;
    },
    resetLoading: (state) => {
      count--;
      if(count <= 0){
        count = 0;
        state.loading = false;
      }
    }
  }
})

export const { storeStates, updateState, setOpenLoginPage, setLoading, resetLoading } = stateSlice.actions

export default stateSlice.reducer