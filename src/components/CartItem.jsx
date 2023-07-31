  import {Stars} from './ratingStar'
import '../styles/CartItem.css'


const CartItem=(props)=>{
  // const star="2.4";
  
  console.log(props.product);
 const  {name,details,price,rating}=props.product
  return(
    <>
     <div className="itemCart">
      <div className="leftBox">
         <div className='imgBox'> 
        Image
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
          /></div>
      <div  className='action-box'>
       <img src='https://cdn-icons-png.flaticon.com/128/1632/1632602.png'
          className="symbolSize" 
         alt='delete-button'
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