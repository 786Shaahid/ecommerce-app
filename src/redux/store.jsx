
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {ecommerceReducer} from './reducer/ecommerceReducer.jsx'


export const store=configureStore({
  reducer:{
    ecommerceReducer
  }
})