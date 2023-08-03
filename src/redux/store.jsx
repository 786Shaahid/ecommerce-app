
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {ecommerceReducer} from './reducer/ecommerceReducer.jsx'
import {notificationReducer} from './reducer/notificationReducer'

export const store=configureStore({
  reducer:{
    ecommerceReducer,
    notificationReducer
  }
})