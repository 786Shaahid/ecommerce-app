import Styled from '../styles/home.module.css'
import {NavLink} from 'react-router-dom'
const Home=()=>{
  return(
    <>
     <div className={Styled.homeContainer}>
     <h1>Welcome To Our E-commerce Website</h1>
     <div className={Styled.buttonContainer}>
      <div className={Styled.btnBox}>
<h2 > Add Item</h2>
        <NavLink to='add-item'>
       <button type="submit" className={Styled.buttonHome}>Add Items</button>
        </NavLink>
      </div>
      <div className={Styled.btnBox}>
<h2 > Show-List</h2>
        <NavLink to="products">
       <button type="submit" className={Styled.buttonHome}>Product-List</button>
        </NavLink>
      </div>
     </div>
     </div>
    </>
  )
}
export {Home};