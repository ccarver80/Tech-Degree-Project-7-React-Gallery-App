import React, { Component } from "react";

class Results extends Component {
    

    render() {
        return(
            
            <li>
                <img src={`https://live.staticflickr.com/${this.props.jsonServerId}/${this.props.jsonId}_${this.props.jsonSecret}.jpg`} alt={`Pic of ${this.props.altText}`}/>
            </li>
            
        )
    }
}

export default Results; 