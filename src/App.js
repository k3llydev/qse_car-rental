import React, { Component } from 'react';
import SearchBar from './search-result-bar.js'
import SearchResult from './search-result.js'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="high-padding">
          <SearchResult />
        </div>
      </div>
    );
  }
}

export default App;
