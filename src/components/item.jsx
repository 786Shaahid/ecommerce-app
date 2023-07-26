import {CartItem} from './CartItem'
import {EditCart} from './editCart'
const Item=()=>{
  return(
    <>
    <div className="bodyContainer">
     <button type='submit' className="sortByPriceBtn">
        <span> Sort by price </span><img src='https://cdn-icons-png.flaticon.com/128/5974/5974771.png' alt='cross' className="crossBtn"/ >
     </button>
      <CartItem/>
     {/* <EditCart/> */}
      
    </div>
    </>
    
  )
}
export {Item};