import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// initialize product
const initialState={
  products:[]
}
// fetch data from given api
export const getInitialStateAsync=createAsyncThunk('product/getInitialState',()=>{ return axios.get('https://my-json-server.typicode.com/786Shaahid/ecommerce-app/products')})
                                                                          
// create slice 
export const ecommerceSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
         
        add:(state,action)=>{
            state.products.push(action.payload)
        },
        delete:(state,action)=>{
            state.product.splice(action.payload,1);
        }
    },
      // set initial state form api using extra reducer
  extraReducers:(builder)=>{
         builder.addCase(getInitialStateAsync.fulfilled,(state,action)=>{
                  // console.log(action.payload.data)
                  state.products=[...action.payload.data];
         })
  }
});

export const ecommerceReducer=ecommerceSlice.reducer;

export const actions=ecommerceSlice.actions;

export const ecommerceSelector=(state)=> state.ecommerceReducer.products;