import "./index.css";
import { Component } from "react";
import SearchBar from "./SearchBar";
import PhotoContainer from "./PhotoContainer";
import NavMenu from "./Nav";
import { BrowserRouter, Route} from "react-router-dom";

import APIkey from "./config";

const api = APIkey;

class App extends Component {
  state = {
    response: [],
    results: ""
  };

  searchValue = (searchResults) => {

    this.setState({
      results: searchResults
    })
    
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
          
          <Route path="/" render={ () => <SearchBar searchData={this.searchValue} /> } />
          <NavMenu />
          <Route path="/:results" render={ () => <PhotoContainer results={this.state.results} jsonArray={this.state.response} /> } />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
