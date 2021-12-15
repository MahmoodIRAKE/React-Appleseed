import React from "react";
import CustomButton from "./customButton";
import './style11.css'

class Ex111 extends React.Component {
    colors = ['blue','red','yellow'];
    
    render() {
        
        return (
            <div>
               
                {this.colors.map((item)=>{
                   
                    <CustomButton color={item}/>
                })}
              
            </div>
        );
    }
}

export default Ex111;