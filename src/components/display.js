import React from "react";
import "../scss/index.scss";

// This file contains all Display components
function DisplayPrevious(props){
    return(
        <div className="display-previous">{props.previous}</div>
    )
}

function DisplayCurrent(props){
    return(
        <div className="display-current">{props.display}</div>
    )
}

function Display(props){
    return(
        <div className="display-container">
            <DisplayPrevious previous={props.previous} />
            <DisplayCurrent display={props.display} />
        </div>
    )
}

export default Display;