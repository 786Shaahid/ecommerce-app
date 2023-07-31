import Styled from '../styles/addProducts.module.css' 
import {useRef,useState} from 'react'

const AddProduct=()=>{
  const titleRef=useRef(0);
  const [product,setProduct]=useState({
      id: Date.now(),
      isSorted: false,
      name: "",
      details: '',
      price: '',
      rating: ''
  });
const handleSubmit=(e)=>{
  e.preventDefault();
  
}
  
  console.log(product);
  return(
    <>
     <div className={Styled.addProductcontainer}>
       <div className={Styled.formBox}>
         <h3 className={Styled.title}>Add A Product</h3>
        <form className={Styled.inputForm} onSubmit={handleSubmit}>
          <lable htmlFor="ItmeNames">Name</lable><br/>
          <input
            type="text"
            className='ItemName'
            onChange={(e)=> {
              setProduct({...product,name:e.target.value})
            }}
            required 
            /><br/><br/>
          <lable htmlFor="description">Description</lable><br/>
          <input type="text"
             className="description" 
            onChange={(e)=> {
              setProduct({...product,details:e.target.value})
            }}
             required 
            /><br/><br/>
          <lable htmlFor='price'>Price</lable><br/>
          <input type="text" 
             className='price'
            onChange={(e)=> {
              setProduct({...product,price:e.target.value})
            }}
             required 
            /><br/><br/>
          <lable htmlFor="rating">Rating</lable><br/>
          <input type="text"
             className='rating' 
            onChange={(e)=> {
              setProduct({...product,rating:e.target.value})
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