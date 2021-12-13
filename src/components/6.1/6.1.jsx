import React from "react";
import './style.css';

class Card2 extends React.Component {
    render() {
  return(
      <div className="card">
        <img src={this.props.src} alt=""/>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <ul>
            <li><a href={this.props.share}>SHARE</a></li>
            <li><a href={this.props.explore}>EXPLORE</a></li>
        </ul>
      </div>
      );
  }
}

export default Card2;