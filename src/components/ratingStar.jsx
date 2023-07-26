import React from "react";
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"
import Styled from '../styles/stars.module.css'

const Stars = ({stars}) => {
  console.log(stars)
       const rating= Array.from({ length: 5 }, (v, index) =>{
                     let number=index+0.5;

                return <span key={index}>
                  {
                   stars >= index+1 ? <AiFillStar className={Styled.icon}/> : stars >= number 
                          ? <BsStarHalf className={Styled.icon}/> :<AiOutlineStar className={Styled.icon}/>
                    
                  }
                      </span>
              });
  
  return(
      <>
        {rating}
      </>
  )
    
};
export {Stars}