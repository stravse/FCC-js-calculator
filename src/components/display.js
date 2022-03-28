import React from "react";
import "../scss/index.scss";

// This file contains all Display components

class DisplayPrevious extends React.Component{
    render(){
        return (
            <div className="display-previous">{this.props.display}</div>
        )
    }
}

class DisplayCurrent extends React.Component {
    render(){
        return(
            <div className="display-current">{this.props.display}</div>
        )
    }
}

class Display extends React.Component{
    render(){
        return(
            <div className="display-container">
                <DisplayPrevious display={this.props.display} />
                <DisplayCurrent display={this.props.display} />
            </div>
        )
    }
}

export default Display;