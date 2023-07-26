import styled from '../styles/Navbar.module.css';
import {NavLink,Outlet} from 'react-router-dom'
const Navbar=()=>{
return( 
  <>
    <div className={styled.Navbar} >
      <NavLink to='/' 
        style={({isActive})=> (isActive ? {color:"yellow",textDecoration: 'none'}:undefined)}
        >  
       <div >Home</div>
      </NavLink>
      <NavLink to='/products' style={({isActive})=> (isActive ? {color:"yellow" ,textDecoration: 'none'}:undefined)}>
       <div>Products</div>
      </NavLink>
      <NavLink to='add-item' style={({isActive})=> (isActive ? {color:"yellow" ,textDecoration: 'none'}:undefined)}>
          <div>Add a product</div>
      </NavLink >
      <div className={styled.cartContainer}>
        <img  src="https://cdn-icons-png.flaticon.com/128/8577/8577866.png" alt="count-item" className={styled.CardImg} />
        <span className={styled.ItemCount}>10</span>
      </div>
    </div>
         <Outlet />

  </>
  
)
}
export {Navbar} 