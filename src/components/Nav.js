import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom'; 

class NavMenu extends Component {
    render() {
        return(
            <nav className="main-nav">
        <ul>
          <li><Link to='#'>Cats</Link></li>
          <li><Link to='#'>Dogs</Link></li>
          <li><Link to='#'>Computers</Link></li>
        </ul>
      </nav>
        )
    }
}

export default NavMenu; 