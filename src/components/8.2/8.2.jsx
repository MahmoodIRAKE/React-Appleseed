import React from "react";

import './style.css';

class Ex82 extends React.Component {
 state={style:'box',change:false}
 

componentDidMount(){
    setTimeout(() => {
        this.setState({style:'box',change:true});
    }, 1000);
}
 componentDidUpdate(){ 
 
    setTimeout(() => {
        this.setState({style:'box',change:false});
    }, 4000);
 
 }
//  componentWillUnmount(){
//     this.setState({style:'box',change:false});
//  }

    render() {
  return(
      <div>
      {this.state.change?<div className={this.state.style} style={{width:this.props.width,height:this.props.height}}>  
      </div>:<></>}
      </div>
      );
  }
}

export default Ex82;