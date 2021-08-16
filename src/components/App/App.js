//import logo from '../../logo.svg';
import './App.css';
//import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import business from './businessObject';
import SelectorType from '../SelectorType/SelectorType';

function App() {
  return (
  <div className="App">
    <h1>ravenous</h1>
    <SearchBar />
    <SelectorType business={business}/>
  </div>
  );
}

export default App;
