import Styled from "../styles/editCart.module.css"

   
const EditCart=()=>{
   const value='Each product is deletable, on clicking of the delete button you should delete the product and show some sort of Alert/Notification'
  return(
    <>
     <div className={Styled.itemCart}>
      <div className={Styled.leftBox}>
      <div className={Styled.imgBox}> 
        Image
      </div>
      </div>
      <div className={Styled.rightBox}> 
        <div className={Styled.main}>
        <div className={Styled.productNamePrice}>
          <div >
            <input 
              text='type' 
              value=' product name' 
              className={Styled.productName}
              />
          </div>
          <div >
           <input
             text='text'
             value='Rs.6000'
             className= {Styled.productPrice}
             />
          </div>
        </div>
          <div >
          <textarea
            
            value={value}
            className={Styled.productDetails}
            />  
          </div>
        </div>
      <div className={Styled.footer}>
      <div >rating : <input 
                       type="text"
                       rows="4"
                       className={Styled.rating}
                    />
      </div>
      <div className={Styled.action}>
      <div className={Styled.actionBox}>
       <button type='submit'  className={Styled.actionBtn} >Cancel </button>
         
          </div>
      <div  className={Styled.actionBox}>
      
       <button type='submit'  className={Styled.actionBtn} >Save </button>
         
          
         
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
export {EditCart};