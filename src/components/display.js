import React from "react";
import DisplayCurrent from "./displayCurrent";
import DisplayAnswer from "./displayAnswer";
import "../scss/index.scss";

class Display extends React.Component{
    render(){
        return(
            <div className="display-container">
                <DisplayCurrent />
                <DisplayAnswer />
            </div>
        )
    }
}

export default Display;