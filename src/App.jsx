import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Item} from "./components/item"
import {Home} from "./components/Home"
import {Navbar} from './components/Navbar'
import  {ErrorHandling} from './components/errorPage'
import {CartItem} from './components/CartItem'
import {AddProduct} from './components/AddProduct'
export default function App() {
  
const route=createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    errorElement:<ErrorHandling/>,
    children:[
      {index:true,element:<Home/>},
      {path: "add-item", element:<AddProduct/>},
      {path: "products", element:<Item/>}
    ]
  }
]) 


  
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}
