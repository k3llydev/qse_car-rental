import React, { Component } from 'react';
import SearchResult from './SearchResult'
import Reservation from './Reservation'
import * as qs from 'query-string';



class Search extends Component {
  render() {
    const parsedQuery = qs.parse(window.location.search, { ignoreQueryPrefix: true } );
    return (
      <div>
        <center><h1>Reserva CarID={parsedQuery.id} ahora.</h1></center>
        <div className="high-padding">
          <Reservation />
        </div>
      </div>
    );
  }
}

export default Search;
