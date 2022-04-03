import React, {useState} from "react";
import Display from "./display";
import Mainpad from "./buttons";
import "../scss/index.scss";

const isOperator = /[+\-*/]/; // check if it is an operator
const endsWithOperator = /[+\-*/]$/; // check if history has an operator
const endsWithNegative = /[+\-*/]{1}-$/; // handles in checking if there is a negative


function App(){
    const [history, setHistory] = useState(""); // used for setting the history
    const [current, setCurrent] = useState("0"); // used for display current value
    const [prevHistory, setPrevHistory] = useState(""); // used for checking previous history;
    const [isEval, setIsEval] = useState(false); // used when user clicks equal sign and will get the value of everything

    function clearDisplay(){
        // will go to final product
        setCurrent("0");
        setHistory("");
        setIsEval(false);
        setPrevHistory("");
    }
    function addNumber(btn) {
        const value = btn.target.value;
        if (current === "0" || isOperator.test(current)){
            setCurrent(value);
        } else {
            setCurrent(prevCurrent => prevCurrent + value);
        }
    }

    function addOperator(btn) {
        const value = btn.target.value;
    }
    function addDecimal(btn) {
        const value = btn.target.value;
        if (!current.includes(value)){
            // do if current doesn't have a decimal
            if (endsWithOperator.test(history) || (current === 0 && history=== "")){
                // if last item was an operator or current is zero and history is blank
                setCurrent("0.");
            } else{
                // if last was a number then just add the decimal
                setCurrent(prevCurrent => prevCurrent + value);
            }
            
        }
    }
    return(
        <div className="calculator-grid">
            <Display 
            current={current} 
            previous={history} 
            />

            <Mainpad 
            number={addNumber}
            operator={addOperator}
            decimal={addDecimal}
            clearDisplay={clearDisplay}
            />
        </div>
    )
}

export default App;