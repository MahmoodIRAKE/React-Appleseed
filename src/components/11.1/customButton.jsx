import React from "react";
import './style11.css'


const CustomButton = ({ color, callBack, id }) => {
  return (
    <div>
      <button
        onClick={(e) => callBack(e.target.textContent)}
        style={{
          color: "white",
          background: color,
          fontSize: "20px",
        }}
      >
        {color}
      </button>
    </div>
  );
};

export default CustomButton;