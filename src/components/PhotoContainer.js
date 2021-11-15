import React from "react";
import { Component } from "react";
import Results from "./Results";

class PhotoContainer extends Component {

  componentDidMount() {
    console.log("comp Mounted")
  }

  componentWillUnmount() {
    console.log("Comp UNMOUNTED")
  }
  

    render(){

        return(
      <div className="photo-container">
      <h2>{`Photo's of ${this.props.results}`}</h2>
      <ul>
          {this.props.jsonArray.map( location => 
          <Results 
          key={location.id}
          jsonServerId={location.server}
          jsonId={location.id}
          jsonSecret={location.secret}
          altText={this.props.results}
          /> 
          )}
      </ul>
    </div>
        )
    }
}

export default PhotoContainer; 