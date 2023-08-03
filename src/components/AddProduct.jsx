import Styled from '../styles/addProducts.module.css' ;
import {useRef,useState} from 'react';
import {actions} from '../redux/reducer/ecommerceReducer';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';

import {notificationSelector,resetNotification} from '../redux/reducer/notificationReducer'

const AddProduct=()=>{
  const addMessage='Added Successfully..'
 const dispatch=useDispatch(); 
 const message=useSelector(notificationSelector) ;
  const [addProduct,setAddProduct]=useState({
      name: '',
      details: '',
      price: '',
      rating: ''
  });
 useEffect(()=>{
   setTimeout(()=>{dispatch(resetNotification())},2000)
 })

  
const handleSubmit=(e)=>{
  e.preventDefault();
  setAddProduct({
    name: '',
      details: '',
      price: '',
      rating: ''
  });
  dispatch(actions.add({addProduct,addMessage}));
  
}
  
  // console.log(addProduct);
  return(
    <>
  { message && <div className='notification' id='addNotification'>{message}</div>}
     <div className={Styled.addProductcontainer}>
       <div className={Styled.formBox}>
         <h3 className={Styled.title}>Add A Product</h3>
        <form className={Styled.inputForm} onSubmit={handleSubmit}>
          <lable htmlFor="ItmeNames">Name</lable><br/>
          <input
            type="text"
            className='ItemName'
            name='name'
            value={addProduct.name}
            onChange={(e)=> {
              setAddProduct({...addProduct,name:e.target.value})
            }}
            required 
            /><br/><br/>
          <lable htmlFor="description">Description</lable><br/>
          <input type="text"
             className="description"
            name='details'
             value={addProduct.details}
            onChange={(e)=> {
              setAddProduct({...addProduct,details:e.target.value})
            }}
             required 
            /><br/><br/>
          <lable htmlFor='price'>Price</lable><br/>
          <input type="text" 
             className='price'
            name='price'
             value={addProduct.price}
            onChange={(e)=> {
              setAddProduct({...addProduct,price:e.target.value})
            }}
             required 
            /><br/><br/>
          <lable htmlFor="rating">Rating</lable><br/>
          <input type="text"
             className='rating'
            name='rating'
             value={addProduct.rating}
            onChange={(e)=> {
              setAddProduct({...addProduct,rating:e.target.value})
            }}
             required 
            /><br/><br/>
          <button type='submit' className={Styled.buttonContainer}>Add</button> 
          
        </form>
     </div>
     
     </div>
    </>
  )
}
export {AddProduct};