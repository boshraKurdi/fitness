import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 'light' ,
  }
const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        SetMode: (state , action) => {
            state.value = action.payload 
        },
    },
  })
  
  
export const { SetMode } = modeSlice.actions
export default modeSlice.reducer