import React from "react";
import "../scss/index.scss";

// This file contains all Display components

class DisplayAnswer extends React.Component{
    render(){
        return (
            <div className="display-answer"></div>
        )
    }
}

class DisplayCurrent extends React.Component {
    render(){
        return(
            <div className="current-display">{this.props.display}</div>
        )
    }
}

class Display extends React.Component{
    render(){
        return(
            <div className="display-container">
                <DisplayCurrent display={this.props.display} />
                <DisplayAnswer />
            </div>
        )
    }
}

export default Display;