import React from "react";
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"
import Styled from '../styles/stars.module.css'

const Stars = ({rating}) => {
  // console.log(rating)
       const stars= Array.from({ length: 5 }, (v, index) =>{
                     let number=index+0.5;

                return <span key={index}>
                  {
                   rating >= index+1 ? <AiFillStar className={Styled.icon}/> : rating >= number 
                          ? <BsStarHalf className={Styled.icon}/> :<AiOutlineStar className={Styled.icon}/>
                    
                  }
                      </span>
              });
  
  return(
      <>
        {stars}
      </>
  )
    
};
export {Stars}