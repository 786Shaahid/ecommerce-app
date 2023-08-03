import Styled from "../styles/editCart.module.css"
import { useDispatch,useSelector } from "react-redux";
import { actions,ecommerceSelector } from "../redux/reducer/ecommerceReducer";
import { useState } from "react";

const EditCart=({index,selectedId})=>{
  const products=useSelector(ecommerceSelector);
  const product=products[index];
const [updateProduct,setUpdateProduct]=useState(product);
  const {name,details,rating,price,image}=updateProduct;
   const dispatch=useDispatch();
   const message='Updated Successfully..'
   
  
  return(
    <>
      <form>
     <div className={Styled.itemCart}>
      <div className={Styled.leftBox}>
      <div className={Styled.imgBox}> 
       <img src={image} alt='item image'/>
      </div>
      </div>
      <div className={Styled.rightBox}> 
        <div className={Styled.main}>
        <div className={Styled.productNamePrice}>
          <div >
            <input 
              text='type' 
              value={name}
              name='name'
              className={Styled.productName}
                onChange={(e)=> 
                  setUpdateProduct({...updateProduct,name:e.target.value})}
              />
          </div>
          <div >
           Rs.<input
             text='text'
             value={price}
             className= {Styled.productPrice}
                onChange={(e)=>setUpdateProduct({...updateProduct,price:e.target.value})}
             />
          </div>
        </div>
          <div >
          <textarea
            value={details}
            className={Styled.productDetails}
            onChange={(e)=> setUpdateProduct({...updateProduct,details:e.target.value})}
            />  
          </div>
        </div>
      <div className={Styled.footer}>
      <div >rating : <input 
                       type="text"
                       value={rating}
                       className={Styled.rating}
                        onChange={(e)=>setUpdateProduct({...updateProduct,rating:e.target.value})}
                    />
      </div>
      <div className={Styled.action}>
      <div className={Styled.actionBox}>
       <button type='submit'  className={Styled.actionBtn} 
          onClick={()=>selectedId(null)}   >Cancel </button>
         
          </div>
      <div  className={Styled.actionBox}>
      
       <button type='submit'  className={Styled.actionBtn} 
         onClick={()=>{
            selectedId(null);            
 dispatch(actions.update({index,updateProduct,message}));
                      } }
         >Save </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </form>
        
    </>
  )
}
export {EditCart};