import React, {useState, useReducer, useEffect} from "react";
import Display from "./display";
import Mainpad from "./buttons";
import "../scss/index.scss";

const PLUS = "plus";
const MINUS = "minus";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const CLEAR = "clear";
const DELETE = "delete";
const initOperator = {after: "0"};



function operationReducer(state, action){
    // does the operatoins
    switch(action.type){
        case PLUS: 
            return {after:  action.previous + action.current};
        case MINUS:
            return {after: action.previous - action.current};
        case MULTIPLY:
            return {after: action.previous * action.current};
        case DIVIDE:
            return {after: action.previous / action.current};
        case CLEAR:
            return {...initOperator};
        default:
            return state;
    }
}

function App(){
    const [current, setCurrent] = useState("0");
    const [previous, setPrevious] = useState("0");
    const [state, dispatch] = useReducer(operationReducer, initOperator);
    useEffect(()=>{
        setPrevious(state.after);
        setCurrent("0");
    },[state.after]);
    const [history, setHistory] = useState("");
    const [operator, setOperator] = useState("");

    function updateDisplay(item){
        if(current === "0"){
            if (current === item){
                return "no multiple Zero";
            }
            setCurrent("");
        }
        else if(item === "."){
            //this check if current already has a decimal point then dont add another one
            if(current.includes(item)){
                return "no multiple decimal"
            }
        } else if (current === "" && operator === ""){
            setPrevious("0");
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

    function handleOperation(operation){
        // does the operation through the operationReducer.
        //so if prev = 0
        //and current has value
        if(current === "0" && previous === "0"){
            console.log("but why?")
            return "cant do nothing";
        }
        else if (previous === "0" && operator === ""){
            console.log('first time');
            setPrevious(current);
            setCurrent("0");
            setOperator(operation);
        }
        else if (operation){
            console.log('you did operation');
            let parsedCurr = parseFloat(current);
            let parsedPrev = parseFloat(previous);
            dispatch({type: operator, current: parsedCurr, previous: parsedPrev});
            setOperator(operation);
        } else{
            console.log('You did equal');
            let parsedCurr = parseFloat(current);
            let parsedPrev = parseFloat(previous);
            dispatch({type: operator, current: parsedCurr, previous: parsedPrev});
            setOperator(operation);
        }
    }

    function clearDisplay(){
        setCurrent("0");
        setPrevious("0");
        dispatch({type: CLEAR});
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
            doOperation={handleOperation}
            />
        </div>
    )
}

export default App;