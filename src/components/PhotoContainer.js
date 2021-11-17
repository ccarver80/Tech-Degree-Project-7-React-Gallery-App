import React from "react";
import { Component } from "react";
import Results from "./Results";
import { withRouter } from "react-router-dom";


class PhotoContainer extends Component {
  

    componentDidMount() {
        this.props.remount(this.props.match.params.results) //If URL is typed in manually it will search based on any params typed in 
    }
 
  render() {
    return (
      <div className="photo-container">
        <h2>{`Photo's of ${this.props.results}`}</h2>
        <ul>

          {this.props.jsonArray.map((location) => (  //Loop over json array from App.js
            <Results
              key={location.id}                      //Passing in props to results.js
              jsonServerId={location.server}
              jsonId={location.id}                     
              jsonSecret={location.secret}
              altText={this.props.results}
            />
          ))}


        </ul>
      </div>
    );
  }
}

export default withRouter(PhotoContainer);
