import "./index.css";
import { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

//Components
import SearchBar from "./SearchBar";
import PhotoContainer from "./PhotoContainer";
import NavMenu from "./Nav";


import APIkey from "./config";
const api = APIkey;

class App extends Component {
  state = {
    response: [], //empty array ready to accept data from fetch API
    results: "" //empty string for results 
  };

  //call back function that gets search results from SearchBar.js
  searchValue = (searchResults) => {
    this.setState({
      results: searchResults   
      
    })

    //Fetch results from flicker
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${searchResults}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          response: data.photos.photo,
        });
      });
    
  };

 


  

  render() {
    return (
      <BrowserRouter>
      
        <div className="container">

          <SearchBar searchData={this.searchValue} /> {/* call back sends search results back into app.js */}

          <NavMenu menuSelect={this.searchValue}/>   {/* onCLick button results sent back into app.js */} 

          {/*results renders photo container */}
          <Route path="/:results" render={ () => <PhotoContainer remount={this.searchValue} results={this.state.results} jsonArray={this.state.response} /> } />
          
        </div>

        
      </BrowserRouter>
    );
  }
}

export default App;
