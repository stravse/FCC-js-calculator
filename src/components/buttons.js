import React from "react";
import "../scss/index.scss"

// This file contains all the buttons on the calculator

function Mainpad(props) {
    // this holds 0 . 1 2 3 4 5 6 7 8 9 = + -

    function clickOperator(operator , value){
        //props.onClick(value);
        props.doOperation(operator);
    }

    return (
        <div className="main-number-container">
            <button id="clear" onClick={props.clearDisplay} >AC</button>
            
            <button id="divide" onClick={props.operator} value="/" >/</button>
            <button id="multiply" onClick={props.operator} value="*" >*</button>

            <button id="seven" onClick={props.number} value="7" >7</button>
            <button id="eight" onClick={props.number} value="8" >8</button>
            <button id="nine" onClick={props.number} value="9" >9</button>

            <button id="subtract" onClick={props.operator} value="-" >-</button>

            <button id="four" onClick={props.number} value="4" >4</button>
            <button id="five" onClick={props.number} value="5">5</button>
            <button id="six" onClick={props.number} value="6">6</button>

            <button id="add" onClick={props.operator} value="+" >+</button>

            <button id="one" onClick={props.number} value="1">1</button>
            <button id="two" onClick={props.number} value="2">2</button>
            <button id="three" onClick={props.number} value="3">3</button>

            <button id="equals" onClick={props.doEval} value="=" >=</button>
            <button id="zero" onClick={props.number}  value="0">0</button>
            <button id="decimal" onClick={props.decimal} value=".">.</button>
        </div>
    )
}

export default Mainpad;