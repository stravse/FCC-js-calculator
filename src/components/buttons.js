import React from "react";
import "../scss/index.scss"

// This file contains all the buttons on the calculator

class Mainpad extends React.Component{
    // this holds 0 . 1 2 3 4 5 6 7 8 9 = + -
    render(){
        return (
            <div className="main-number-container">
                <button>AC</button>
                <button>DEL</button>
                <button>/</button>
                <button>*</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="span-two-row">=</button>
                <button className="span-two-column">0</button>
                <button>.</button>
                
            </div>
        );
    }
}

export default Mainpad;