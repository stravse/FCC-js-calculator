import React from "react";
import Display from "./display";
import Mainpad from "./buttons";
import "../scss/index.scss";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: "0",
            previous: "",
            operator: "",
            history: "",
        }
        this.updateDisplay = this.updateDisplay.bind(this);
        this.updatePrevious = this.updatePrevious.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }
    updateDisplay(item){
        this.setState(state=> {return{
            current: state.current + item,
        }})
    }
    updatePrevious(){
        this.setState(state=>{return{
            current: "",
            previous:  state.previous + state.current,
        }})
    }
    clearDisplay(){
        this.setState({
            current: "",
            previous: "",
        })
    }
    render(){
        console.log(this.state);
        return(
            <div className="calculator-grid">
                <Display display={this.state.current} previous={this.state.previous} />
                <Mainpad onClick={this.updateDisplay} updatePrev={this.updatePrevious} clearDisplay={this.clearDisplay} />
            </div>
        )
    }
}

export default App;