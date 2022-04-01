import React from "react";
import "../scss/index.scss"

// This file contains all the buttons on the calculator

function Mainpad(props) {
    // this holds 0 . 1 2 3 4 5 6 7 8 9 = + -
    return (
        <div className="main-number-container">
            <button id="clear" onClick={props.clearDisplay} >AC</button>
            <button id="delete" onClick={props.updatePrev}>DEL</button>
            <button id="divide" onClick={() => props.onClick("/")}>/</button>
            <button id="multiply" onClick={() => props.onClick("*")}>*</button>
            <button id="seven" onClick={() => props.onClick("7")}>7</button>
            <button id="eight" onClick={() => props.onClick("8")}>8</button>
            <button id="nine" onClick={() => props.onClick("9")}>9</button>
            <button id="subtract" onClick={() => props.onClick("-")}>-</button>
            <button id="four" onClick={() => props.onClick("4")}>4</button>
            <button id="five" onClick={() => props.onClick("5")}>5</button>
            <button id="six" onClick={() => props.onClick("6")}>6</button>
            <button id="add" onClick={() => props.onClick("+")}>+</button>
            <button id="one" onClick={() => props.onClick("1")}>1</button>
            <button id="two" onClick={() => props.onClick("2")}>2</button>
            <button id="three" onClick={() => props.onClick("3")}>3</button>
            <button id="equals" onClick={props.updatePrev} className="span-two-row">=</button>
            <button id="zero" onClick={() => props.onClick("0")} className="span-two-column">0</button>
            <button id="decimal" onClick={() => props.onClick(".")}>.</button>
        </div>
    )
}

export default Mainpad;