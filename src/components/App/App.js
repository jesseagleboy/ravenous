//import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
//import business from './businessObject';
import BusinessList from '../BusinessList/BusinessList';
import {Yelp} from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  
  async searchYelp(term, location, sortBy) {
    const businessesArray = await Yelp.search(term, location, sortBy);
    this.setState({businesses: businessesArray});
  }


  render() {
    
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList business={this.state.businesses} />
        
      </div>
      );
  }
}

export default App;
