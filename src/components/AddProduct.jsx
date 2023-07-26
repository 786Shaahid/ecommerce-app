import Styled from '../styles/addProducts.module.css' 
import {useRef} from 'react'

const AddProduct=()=>{
  const titleRef=useRef(0);
  return(
    <>
     <div className={Styled.addProductcontainer}>
       <div className={Styled.formBox}>
         <h3 className={Styled.title}>Add A Product</h3>
        <form className={Styled.inputForm} >
          <lable htmlFor="ItmeNames">Name</lable><br/>
          <input
            type="text"
            className='ItemName'
            required 
            /><br/><br/>
          <lable htmlFor="description">Description</lable><br/>
          <input type="text"
             className="description"               
             required 
            /><br/><br/>
          <lable htmlFor='price'>Price</lable><br/>
          <input type="text" 
             className='price'             
             required 
            /><br/><br/>
          <lable htmlFor="rating">Rating</lable><br/>
          <input type="text"
             className='rating'   
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