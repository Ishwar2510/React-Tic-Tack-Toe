import React from "react";
import {FaRegCircle ,FaHashtag} from "react-icons/fa";
  import {ImCross } from "react-icons/im";

const Icon=({player})=>{
  

  
    switch (player){
        case "cross":
            return  <ImCross />
         
        case "circle":
           return  <FaRegCircle />   
           
        default:
            return  <FaHashtag />  
    }   
   
}
export default Icon;