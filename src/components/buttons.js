import React from "react";
import "../scss/index.scss"

// This file contains all the buttons on the calculator
class NumPad extends React.Component{
    constructor(props){
        super(props);
    }
    //This component is used for the buttton
    render(){
        return(
            <div>{this.props.value}</div>
        );
    }
}

class ZeroDot extends React.Component {
    // this holds zero and dot
    render(){
        return (
            <div className="zero-dot-container">

            </div>
        );
    }
}

class NumberContainer extends React.Component {
    // this holds 1 2 3 4 5 6 7 8 9
    render(){
        return(
            <div className="number-container" ></div>
        );
    }
}

class OperatorContainer extends React.Component {
    // this holds + = -
    render(){
        return(
            <div className="operator-container">

            </div>
        );
    }
}

class NumOperator extends React.Component {
    // this holds 0 . 1 2 3 4 5 6 7 8 9
    render(){
        return(
            <div className="num-operator-container">
                <NumberContainer />
                <ZeroDot />
            </div>
        );
    }
}

class TopContainer extends React.Component{
    // this holds AC / *
    render(){
        return(
            <div className="top-containter">

            </div>
        );
    }
}

class Mainpad extends React.Component{
    // this holds 0 . 1 2 3 4 5 6 7 8 9 = + -
    render(){
        return (
            <div className="main-number-container">
                <NumOperator />
                <OperatorContainer /> 
            </div>
        );
    }
}

class ButtonContainer extends React.Component{
    // this holds 0 . 1 2 3 4 5 6 7 8 9 = + - AC / *
    //also known as everything
    render(){
        return(
            <div className="button-container">
                <TopContainer />
                <Mainpad />
            </div>
        );
    }
}

export default ButtonContainer;