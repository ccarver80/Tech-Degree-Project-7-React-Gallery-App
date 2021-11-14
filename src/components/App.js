import './index.css' 
import SearchBar from './SearchBar';
import PhotoContainer from './PhotoContainer';
import NavMenu from './Nav';
import APIkey from './config';

function App() {
  return (
    <div className="container">

    <SearchBar />
    <NavMenu /> 
    <PhotoContainer />

    </div>
  );
}

export default App;
