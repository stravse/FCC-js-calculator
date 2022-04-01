import React, {useState, useReducer} from "react";
import Display from "./display";
import Mainpad from "./buttons";
import "../scss/index.scss";

const PLUS = "plus";
const MINUS = "minus";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const initOperator = {ops: "", after: "0"}
const CHANGEOPERATOR = "changeOperator";

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
        case CHANGEOPERATOR:
            return {...state, ops: action.ops}
        default:
            return state;
    }
}

function App(){
    const [current, setCurrent] = useState("0");
    const [previous, setPrevious] = useState(null);
    const [state, dispatch] = useReducer(operationReducer, initOperator);
    const [history, setHistory] = useState("");

    function updateDisplay(item){
        if(current === "0"){
            if (current === item){
                return "no multiple Zero";
            }
            setCurrent("");
        }
        else if(item === "."){
            //this check if current already has a decimal point then dont add another one
            if(current.indexOf(item) != -1){
                return "no multiple decimal"
            }
        }
        setCurrent(prevCurrent => prevCurrent + item);
        setHistory(history + current);
    }

    function updatePrevious(){
        if (previous === null){
            setPrevious(current);
            setCurrent("");
        } else{
            setPrevious(previous + current);
            setCurrent("");
        }
        
    }

    function handleOperation(operator, current, previous){
        // does the operation through the operationReducer
        if (!state.ops || previous === null){
            dispatch({type: operator, current: parseInt(current), previous: parseInt(previous)})
            setPrevious(state.after);
            setCurrent("")
        }

    }

    function clearDisplay(){
        setCurrent("0");
        setPrevious(null);
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