import {createSlice} from '@reduxjs/toolkit'
import {actions} from './ecommerceReducer'
const initialState={
  message:''
}

export const notificationSlice=createSlice({
  name:'notification',
  initialState,
  reducers:{
      reset:(state,action)=>{
          state.message=''
      }
  },
    extraReducers:{
      [actions.delete]:(state,action)=>{
           state.message=action.payload.message;
      },
     [actions.update]:(state,action)=>{
       state.message=action.payload.message;
     },
      [actions.add]:(state,action)=>{
          state.message='Added Successfully..!'
      }
      
    
    }
})

export const notificationReducer=notificationSlice.reducer;

export const  resetNotification=notificationSlice.actions.reset;

export const notificationSelector=(state)=>state.notificationReducer.message;
