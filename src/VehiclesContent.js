import React, { Component } from 'react'
import VehicleResults from './VehicleResults'

class VehiclesContent extends Component{
    render(){
        return(
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
  <VehicleResults displayState={this.props.displayState} />
</div>



</div>
        );
    }
}
export default VehiclesContent;