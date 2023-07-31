import {CartItem} from './CartItem';
import {EditCart} from './editCart';
import {ecommerceSelector,getInitialStateAsync} from '../redux/reducer/ecommerceReducer' ;
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

const Items=()=>{
 const products=useSelector(ecommerceSelector);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getInitialStateAsync());
  },[])

  console.log(products)
  
  return(
    <>
    <div className="bodyContainer">
     <button type='submit' className="sortByPriceBtn">
        <span> Sort by price </span><img src='https://cdn-icons-png.flaticon.com/128/5974/5974771.png' alt='cross' className="crossBtn"/ >
     </button>
      {
        products.map((product,index)=>(
          // console.log(product),
                  <CartItem  product={product} index={index}/>
        ))    
        
      }
     {/* <EditCart/> */}
      
    </div>
    </>
    
  )
}
export {Items};