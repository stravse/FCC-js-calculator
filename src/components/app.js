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
    const [backup, setBackup] = useState(""); // used for checking previous history;
    const [isEval, setIsEval] = useState(false); // used when user clicks equal sign and will get the value of everything

    function clearDisplay(){
        // will go to final product
        setCurrent("0");
        setHistory("");
        setIsEval(false);
        setBackup("");
    }
    function addNumber(btn) {
        const value = btn.target.value;
        if (isEval){
            setCurrent(value);
            setHistory(value);
            setIsEval(false);
        } else{
            setCurrent(prevCurrent => 
                current === "0" || isOperator.test(current)
                ? value
                : prevCurrent + value
            );
            setHistory(prevHistory =>
                current === "0" && value === "0" // if current and value is zero then
                ? history === "" // if history is blank
                    ? value // if true then add value
                    : prevHistory // if not then just return prev history
                :/([+\-*/]0|^0)$/.test(history)// if last item in history was an operator and then a zero remove zero then add number or when history begins with zero replace zero with number
                ? prevHistory.slice(0,-1) + value
                : prevHistory + value // if history  isn't empty then just add value from prevhistory
            )
        }

        
    }
    function addOperator(btn) {
        const value = btn.target.value;
        if (isEval){
            setIsEval(false);
            setHistory(current + value);
            setBackup(current);
        }
        else{
            if (!isOperator.test(current)){
                // if current is not an operator
                setBackup(history);
                setHistory(prevHistory => prevHistory + value);
            } else if (endsWithNegative.test(history) && value === "-"){
                return;
            } else if (endsWithNegative.test(history)){
                setHistory(backup + value);
            } else if (endsWithOperator.test(history) && value === "-"){
                setHistory(prevHistory => prevHistory + value);
            } else {
                setHistory(backup + value);
            }
        }
        setCurrent(value);
        
    }

    function addDecimal(btn) {
        const value = btn.target.value;
        if (isEval){
            setCurrent("0.");
            setHistory("0.");
            setIsEval(false);
        }
        if (!current.includes(value)){
            if (endsWithOperator.test(history) || (current === "0" && history === "")){
                setCurrent("0.");
                setHistory("0.");
            } else{
                setCurrent(prevCurrent => prevCurrent + value);
                setHistory(prevHistory => prevHistory + value);
            }
        }
    }

    function doEval(){
        let number = "";
        if(endsWithOperator.test(history)){
            number = eval(backup);
            setHistory(backup + "=" + number);
        } else{
            number = eval(history);
            setHistory(prevHistory => prevHistory + "=" + number);
        }

        setIsEval(true);
        setCurrent(number);
        
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
            doEval={doEval}
            />
        </div>
    )
}

export default App;