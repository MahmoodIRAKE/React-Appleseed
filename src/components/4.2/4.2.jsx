import React from "react";
import './style.css';

const Card=(props)=>{
  return(
      <div className="card">
        <img src={props.src} alt=""/>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <ul>
            <li><a href={props.share}>SHARE</a></li>
            <li><a href={props.explore}>EXPLORE</a></li>
        </ul>
      </div>
      );
}

export default Card;