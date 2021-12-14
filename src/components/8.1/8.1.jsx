import React from "react";

import './style.css';

class Ex81 extends React.Component {
 state={favoriteColor:'blue'}
 myRef=React.createRef();

 componentDidMount(){
     console.log(this.myRef.current)
     setTimeout(() => {
         this.setState({favoriteColor:'red'});
     }, 1000);
 }
 componentDidUpdate(){
    this.myRef.current.innerText='The updated favorite color is '+this.state.favoriteColor;
 }
    render() {
  return(
      <div className="main">
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="color-id" ref={this.myRef}></div>
         
      </div>
      );
  }
}

export default Ex81;