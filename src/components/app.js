import React, {useState, useReducer} from "react";
import Display from "./display";
import Mainpad from "./buttons";
import "../scss/index.scss";

const PLUS = "plus";
const MINUS = "minus";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const initOperator = {ops: "", after: "0"}

function operationReducer(state, action){
    // does the operatoins
    switch(action.type){
        case PLUS: 
            return {...state, after: action.previous + action.current };
        case MINUS:
            return {...state, after: action.previous - action.current};
        case MULTIPLY:
            return {...state, after: action.previous * action.current};
        case DIVIDE:
            return {...state, after: action.previous / action.current};
        default:
            return state;
    }
}

function App(){
    const [current, setCurrent] = useState("");
    const [previous, setPrevious] = useState(null);
    const [state, dispatch] = useReducer(operationReducer, initOperator);
    const [history, setHistory] = useState("");

    function updateDisplay(item){
        setCurrent(prevCurrent => prevCurrent + item);
    }

    function updatePrevious(){
        setPrevious(previous + current);
    }

    function handleOperation(operator, current, previous){
        // does the operation through the operatoinReducer
        if (!state.ops || previous === null){
            dispatch({type: operator, current: current, previous: previous})
            setCurrent(state.after);
        }

    }

    function clearDisplay(){
        setCurrent("");
        setPrevious("");
    }
    return(
        <div className="calculator-grid">
            <Display 
            display={current} 
            previous={previous} 

            />

            <Mainpad 
            onClick={updateDisplay} 
            updatePrev={updatePrevious} 
            clearDisplay={clearDisplay} 

            />
        </div>
    )
}

export default App;