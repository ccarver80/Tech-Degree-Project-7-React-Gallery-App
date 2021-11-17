import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom'; 


class NavMenu extends Component {

  handleClick = (e) => {
      this.props.menuSelect(e.target.innerText) //sends button text as a callback to app.js
  }


    render() {
        return(
            <nav className="main-nav">
        <ul>
          <li><Link to='/Cats' onClick={this.handleClick}>Cats</Link></li>
          <li><Link to='/Dogs' onClick={this.handleClick}>Dogs</Link></li>
          <li><Link to='/Computers' onClick={this.handleClick}>Computers</Link></li>
        </ul>
      </nav>
        )
    }
}

export default NavMenu; 