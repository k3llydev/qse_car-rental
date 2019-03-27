import React, { Component } from 'react';
// import SearchResult from './SearchResult'
import Reservation from './Reservation'
import * as qs from 'query-string';
import HomeFooter from './HomeFooter'
import { groupedOptions } from './data'

class Search extends Component {

  getCarById = (id) => {
    var carLabel = false;
    groupedOptions.forEach(function(category){
      category.options.forEach(function(vehicle){
        if( id == vehicle.value ){
          carLabel = vehicle.label
        }
      })
    })
    return carLabel;
  }

  getCarDataById = (id) => {
    var carData = false;
    groupedOptions.forEach(function(category){
      category.options.forEach(function(vehicle){
        if( id == vehicle.value ){
          carData = vehicle
        }
      })
    })
    return carData;
  }

  render() {
    const parsedQuery = qs.parse(window.location.search, { ignoreQueryPrefix: true } );
    const carID = ( parsedQuery.id === null ? false : parsedQuery.id )
      if(carID === false || this.getCarById(carID) == false ){
        return(<h1>Car not found:(</h1>)
      }else{
        const carData = this.getCarDataById(carID)
        console.log(carData)
        return (
          <div>
            <center><h1 id="reservationTitle" style={{fontFamily: 'Museo'}}>Reserva un <span id="carNameTitle">{this.getCarById(carID)}</span> ahora.</h1></center>
            <div className="high-padding">
              <Reservation carID={carID} carName={carData.label} carCosts={carData.cost} carImage={carData.image} carFeatures={carData.features} />
            </div>
            <HomeFooter />
          </div>
        );
      }
  }
}

export default Search;
