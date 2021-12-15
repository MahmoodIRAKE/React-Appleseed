import React from "react";
import './style11.css'

const CustomButton=(props)=>{
 
  return(
      <div>
          <button className="btn11" style={{backgroundColor:props.color}}>{props.color}</button>
      </div>
  );
}
export default CustomButton;