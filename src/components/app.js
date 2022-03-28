import React from "react";
import Display from "./display";
import Mainpad from "./buttons";
import "../scss/index.scss";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: "This is another test",
        }
    }
    render(){
        return(
            <div className="calculator-grid">
                <Display display={this.state.current} />
                <Mainpad />
            </div>
        )
    }
}

export default App;