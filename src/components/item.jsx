import {CartItem} from './CartItem';
import {EditCart} from './editCart';
import {actions, ecommerceSelector,getInitialStateAsync,sortSelector} from '../redux/reducer/ecommerceReducer' ;
import {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {notificationSelector,resetNotification} from '../redux/reducer/notificationReducer'

const Items=()=>{
 const dispatch=useDispatch();
 const products=useSelector(ecommerceSelector);
  const [selectedId,setSelectedId]=useState(null);
  const message=useSelector(notificationSelector);
  const isSorted=useSelector(sortSelector);
  // fetching initial data from api
  useEffect(()=>{
    dispatch(getInitialStateAsync());
  },[]);
// set message for notification 
   useEffect(()=>{
     if(message){
       setTimeout(()=>{
         dispatch(resetNotification());
       },2000)
     }
   });
  // product sort by price
const productSortedByPrice= products.slice().sort((a,b)=> a.price-b.price);
  const allItems=isSorted ?productSortedByPrice:products;
  
  return(
    <>
    <div className="bodyContainer">
      
    { message && <div className='notification'>{message}</div>}
     <button type='submit' className="sortByPriceBtn" 
       onClick={()=>dispatch(actions.sort())}
       >
        <span> Sort by price </span>{isSorted && <img src='https://cdn-icons-png.flaticon.com/128/5974/5974771.png' alt='cross' className="crossBtn"/ >}
     </button>
      {
    allItems.length ?   allItems.map((product,index)=>(
         <>
           {  index===selectedId ? <EditCart  index={index}/> :
                  <CartItem  product={product} index={index} selectedId={setSelectedId}/>
           }
         </>
        )):<h1 className='waiting' >Please Wait, it's loading....</h1>    
        
      }
     
      
    </div>
    </>
    
  )
}
export {Items};