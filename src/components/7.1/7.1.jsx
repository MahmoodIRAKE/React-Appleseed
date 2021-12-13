import React from "react";
import Card2 from "../6.1/6.1";
import './style.css';

class Increment extends React.Component {
    constructor(props){
        super(props);
        this.state={value:0}
    }
    render() {
  return(
      <div className="Increment">
         <button onClick={()=>{console.log(this.state);this.setState({value:this.state.value+1})}}>INCREASE</button>
         <h2>{this.state.value}</h2>
      </div>
      );
  }
}

export default Increment;