import React from "react";
import CustomButton from "./customButton";
import './style11.css'

class Ex111 extends React.Component {
    colors = [
        { color: "blue", id: 0 },
        { color: "red", id: 1 },
        { color: "yellow", id: 2 },
        { color: "green", id: 3 }
      ];
      state={selectedColor:''}
      updateColor = (color) => {
       this.setState({selectedColor:color});
      };
    
    render() {
        
        return (
            <div>
            <h1>The color selected is : {this.state.selectedColor}</h1>
            {this.colors.map((btn) => {
              return (
                <CustomButton
                  callBack={this.updateColor}
                  id={btn.id}
                  key={btn.id}
                  color={btn.color}
                />
              );
            })}
          </div>
        );
    }
}

export default Ex111;