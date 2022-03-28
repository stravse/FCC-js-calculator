import React from "react";
import "../scss/index.scss"

// This file contains all the buttons on the calculator

class Mainpad extends React.Component{
    // this holds 0 . 1 2 3 4 5 6 7 8 9 = + -
    render(){
        return (
            <div className="main-number-container">
                <button onClick={this.props.clearDisplay} >AC</button>
                <button onClick={this.props.updatePrev}>DEL</button>
                <button onClick={() => this.props.onClick("/")}>/</button>
                <button onClick={() => this.props.onClick("*")}>*</button>
                <button onClick={() => this.props.onClick("7")}>7</button>
                <button onClick={() => this.props.onClick("8")}>8</button>
                <button onClick={() => this.props.onClick("9")}>9</button>
                <button onClick={() => this.props.onClick("-")}>-</button>
                <button onClick={() => this.props.onClick("4")}>4</button>
                <button onClick={() => this.props.onClick("5")}>5</button>
                <button onClick={() => this.props.onClick("6")}>6</button>
                <button onClick={() => this.props.onClick("+")}>+</button>
                <button onClick={() => this.props.onClick("1")}>1</button>
                <button onClick={() => this.props.onClick("2")}>2</button>
                <button onClick={() => this.props.onClick("3")}>3</button>
                <button onClick={this.props.updatePrev} className="span-two-row">=</button>
                <button onClick={() => this.props.onClick("0")} className="span-two-column">0</button>
                <button onClick={() => this.props.onClick(".")}>.</button>
                
            </div>
        );
    }
}

export default Mainpad;