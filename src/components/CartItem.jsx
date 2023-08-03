  import {Stars} from './ratingStar'
import '../styles/CartItem.css'
import {useDispatch} from 'react-redux'
import {actions} from '../redux/reducer/ecommerceReducer'

const CartItem=({product,index,selectedId})=>{
   const dispatch=useDispatch();
   const message="Deleted Successfully";
     // console.log(props.product);
 const  {name,details,price,rating,image}=product;
  return(
    <>
      
     <div className="itemCart">
      <div className="leftBox">
         <div className='imgBox'> 
       <img src={image} alt="item image"/>    
      </div>
      </div>
      <div className="rightBox"> 
        <div className='main'>
        <div className='productNamePrice'>
          <div className='productName'>{name}</div>
          <div className='productPrice'>Rs.{price}</div>
        </div>
          <div className='productDetails'>{details}
</div>
        </div>
      <div className="footer">
      <div className='rating'>
      <Stars rating={rating}/>
      </div>
      <div className='action'>
      <div className='action-box'>
        <img 
          src='https://cdn-icons-png.flaticon.com/128/2919/2919592.png'
          alt='edit'
          className="symbolSize" 
          onClick={()=>selectedId(index)}
          /></div>
      <div  className='action-box'>
       <img src='https://cdn-icons-png.flaticon.com/128/1632/1632602.png'
          className="symbolSize" 
         alt='delete-item'
         onClick={()=> dispatch(actions.delete({index,message}))}
         />
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
export {CartItem};