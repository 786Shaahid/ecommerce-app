  import {Stars} from './ratingStar'
import '../styles/CartItem.css'
const CartItem=()=>{
  const star=2.4;
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
          <div className='productName'>product name</div>
          <div className='productPrice'>Rs.6000</div>
        </div>
          <div className='productDetails'>Each product is deletable, on clicking of the delete button you should delete the product and show some sort of Alert/Notification
</div>
        </div>
      <div className="footer">
      <div className='rating'>
      <Stars stars={star}/>
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