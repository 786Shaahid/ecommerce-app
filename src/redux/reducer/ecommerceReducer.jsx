import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// initialize product
const initialState={
  products:[],
  isSorted:false
}
// fetch data from given api to initailize state
export const getInitialStateAsync=createAsyncThunk('product/getInitialState',()=>{ return axios.get('https://my-json-server.typicode.com/786Shaahid/ecommerce-app/products')})

// add data in api
export const addProductAsync=createAsyncThunk('product/addProduct',async(payload)=>{
     const response= await fetch('https://my-json-server.typicode.com/786Shaahid/ecommerce-app/products',{
       method:"POST",
       header:{
         "content-type":'application/json'
       },
       body:JSON.stringify(payload)
     });

  return response.json()

  
})

// create slice 
export const ecommerceSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
         add:(state,action)=>{
            state.products.push(action.payload.addProduct);
        },
        sort:(state,action )=>{
             state.isSorted=!state.isSorted
        },
        delete:(state,action)=>{
            state.products.splice(action.payload.index,1);
        },
      update:(state,action)=>{
state.products[action.payload.index]=action.payload.updateProduct;
             console.log(action.payload.updateProduct)
      }

      
    },
      // set initial state form api using extra reducer
  extraReducers:(builder)=>{
         builder.addCase(getInitialStateAsync.fulfilled,(state,action)=>{
                  // console.log(action.payload.data)
                  state.products=[...action.payload.data];
         })
    .addCase(addProductAsync.fulfilled,(state,action)=>{
          state.products.push(action.payload)
    })
         
  }
});

export const ecommerceReducer=ecommerceSlice.reducer;

export const actions=ecommerceSlice.actions;

export const ecommerceSelector=(state)=> state.ecommerceReducer.products;
export const sortSelector=(state)=> state.ecommerceReducer.isSorted;