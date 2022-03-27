import React from "react";
import "../scss/index.scss";

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrapper">
                <h1> This is a test</h1>
            </div>
        )
    }
}

export default App;