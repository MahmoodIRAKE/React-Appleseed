import React from "react";

import './style1.css';

class Ex83 extends React.Component {
    state = { color: '', counter: 0 ,rad:''}
    colors=['red','blue','green','yellow','black']

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'red', counter: this.state.counter });
        }, 500);
    }
    componentDidUpdate() {

        if (this.state.counter < 5) {
            setTimeout(() => {
            this.setState({ color: this.colors[this.state.counter], counter: this.state.counter + 1 });
            }, 500);
        }
        else {
            this.setState({rad:'180px',counter:0});
        }

    }
    //  componentWillUnmount(){
    //     this.setState({style:'box',change:false});
    //  }

    render() {
        return (
            <div>
                <div className='box2' style={{ backgroundColor: this.state.color,borderRadius:this.state.rad }}>
                </div>
            </div>
        );
    }
}

export default Ex83;