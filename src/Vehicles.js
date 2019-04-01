import React, { Component } from 'react'
import {withRouter} from 'react-router'
import './css/VehiclesStylesCorrections.css'
import VehicleResults from './VehicleResults'
import {VehicleCategories} from './CustomFormData'
import * as qs from 'query-string';

const parsedQuery = qs.parse(window.location.search, { ignoreQueryPrefix: true } );
const category = ( parsedQuery.category === null ? false : parsedQuery.category )

// import LoadingScreen from './LoadingScreen'

class Vehicles extends Component{
    
    constructor(){
        super()
        this.state = {
            displayState: 0 // 0 means all, -1 means not a category, X number shows its category
        }
    }

    categoryExists = (c) => {
        var exists = false
        VehicleCategories.map(e=>{
            exists = ( e.typeId == c ? true : exists )
        })
        return exists
    }

    componentDidMount(){
            if(typeof category == "undefined"){
                this.setState({
                    displayState: 0
                })
            }else{
                if( this.categoryExists(category) ){
                    this.setState({
                        displayState: Number(category)
                    })
                }else{
                    this.setState({
                        displayState: -1
                    })
                }
            }
            // this.render()
            // alert(/Component did mount/)
    }

    render(){
        var displayState = this.state.displayState
        return (
            <div>
<div className="row search_area_holder relative">
  <img
    className="absolute"
    src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/service_background_road.jpg"
    alt
  />
  <div className="container search_area_inner">
    <div className="mt-car-search">
      <center><h3>RESERVA UN VEHÍCULO AHORA</h3></center>
    </div>
  </div>
</div>

<div className="high-padding">
  {( displayState > 0 ? <VehicleResults category={category} /> : (displayState < 0 ? <h1>No hay resultados</h1> : <h1>Show all</h1> ) )}
</div>



</div>
        )
    }
}
export default withRouter(Vehicles);