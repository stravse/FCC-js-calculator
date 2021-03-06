import React from "react";
import "../scss/index.scss";

// This file contains all Display components

function Display(props){
    return(
        <div className="display-container">
            <div className="display-previous">{props.previous}</div>
            <div id="display" className="display-current">{props.current}</div>
        </div>
    )
}

export default Display;