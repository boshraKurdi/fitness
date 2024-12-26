import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    check: false ,
    user:{}
  }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetAuth: (state , action) => {
            state.check = true
        },
        SetLogout: (state , action) =>{
            state.check = false
        }
    },
  })
  
  
export const { SetAuth , SetLogout } = authSlice.actions
export default authSlice.reducer