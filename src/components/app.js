import React from "react";
import Display from "./display";
import ButtonContainer from "./buttons";
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
            <div className="wrapper">
                <h1> This is a test</h1>
                <Display display={this.state.current} />
                <ButtonContainer />
            </div>
        )
    }
}

export default App;