import React, {Component} from 'react'
import ReservationForm from './ReservationForm'
import ReservationPrice from './ReservationPrice'
import {VehicleCategories, OfficeLocations} from './CustomFormData'
import './css/ReservationFixStyles.css'
import './css/ReservationForm.css'
import './css/Reservation.css'
import * as qs from 'query-string';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const parsedQuery = qs.parse(window.location.search, { ignoreQueryPrefix: true } );
const VehicleId = ( parsedQuery.vid === null ? false : parsedQuery.vid )



class CarFeatures extends Component {
  render(){
      var result = [];
      this.props.data.forEach(function(feature){
      result.push(
        <div className="col-md-4">
              <i class="fas fa-check"></i>
              <a
                href="javascript:void(0)"
                rel="tag"
              >
                {feature}
              </a>
        </div>
      )
    })
    return( result )
  }
}


class Reservation extends Component{

constructor(props){
  super(props)
  this.state = {
    vehicleData: []
  }
}

VehicleExists = (id) => {
  var exists = false
  VehicleCategories.map(e=>{
      e.results.map(vehicle=>{
        exists = ( vehicle.value == id ? true : exists )
        this.state.vehicleData = ( vehicle.value == id ? vehicle : this.state.vehicleData )
      })
  })
  return exists
}

timeFormat = (d) => {
  var seconds = Number(d) // 1000;
  var dys = Math.floor(seconds / (3600*24));
  seconds  -= dys*3600*24;
  var hrs   = Math.floor(seconds / 3600);
  seconds  -= hrs*3600;
  var mnts = Math.floor(seconds / 60);
  seconds  -= mnts*60;
  return (dys+" dias, "+hrs+" horas y "+mnts+" minutos." );
}




// selectRentalType = (type) => {
//   var RentalTypes = ["perDay","perWeek","perMonth"]
//   RentalTypes.forEach(function(element){
//     document.getElementById(element).classList.remove("selectedRentalType")
//     document.getElementById(element+'Icon').classList.remove("selectedRentalTypeIcon")
//   })
//   document.getElementById(RentalTypes[type-1]).classList.add("selectedRentalType")
//   document.getElementById(RentalTypes[type-1]+'Icon').classList.add("selectedRentalTypeIcon")
// }

// componentDidMount(){
//   this.selectRentalType(1);
// }

    render(){
      if(this.VehicleExists(VehicleId)){
        var data = this.state.vehicleData
      }else{
        return <h1>No cars found</h1>
      }
        return(
            <article
  id="post-7455"
  className="post high-padding post-7455 mt_car type-mt_car status-publish has-post-thumbnail hentry mt-car-category-mercedes mt-car-category-ml mt-car-type-suv mt-car-features-air-conditioning mt-car-features-all-wheel-drive mt-car-features-audio-input mt-car-features-bluetooth mt-car-features-cancellation mt-car-features-cruise-control mt-car-features-dvd-video-system mt-car-features-fm-radio mt-car-features-gps-navigation mt-car-features-heated-seats mt-car-features-keyless-entry mt-car-features-leather-seats mt-car-features-roadside-assistance mt-car-features-sunroof mt-car-features-theft-protection mt-car-features-third-row-seat mt-car-features-tow-hitch mt-car-features-usb-input"
>
<center><img id="carBackground" src="https://i.imgur.com/xGPz3fU.jpg" /></center>
<center><img id="carImage" src={data.image} /></center>
  <div className="container">
    <div className="row">
      <div className="col-md-8 main-content">
        <div className="row mt_car--pricings">

        <div className="ReservationTicket">
          <div className="TicketTitle"><h3>DETALLES DE TU RESERVACIÓN</h3></div>
          <div className="TicketContent">
            <div className="TicketRentTime">RENTA: {this.timeFormat(cookies.get("rentTime"))}</div>
            <div className="TicketTotal"><span className="TicketBold">TOTAL:</span> $<ReservationPrice rentTime={cookies.get("rentTime")} vehicle={data.value} /></div>
          </div>
        </div>



        </div>
        {/* HEADER */}
        <div className="article-header">
          <div className="article-details">
          <center><h1>BENEFICIOS</h1></center>
            <div className="clearfix" />
          </div>
        </div>
        {/* CONTENT */}
        <div className="article-content">
          {/* POST CONTENT */}
          <h3>Cancelación gratuita</h3>
          <p>
            At vero eos et accusamus, consectetur adipiscing elit. Sed
            sodales nibh et suscipit placerat. Cras et odio ante.
            Praesent elit massa, pharetra et lacus id, gravida congue
            nulla. Donec in tempor odio. Maecenas bibendum sagittis
            laoreet. Proin mauris erat, viverra eget neque at, congue
            posuere erat.
          </p>
          <h3>Kilometraje ilimitado</h3>
          <p>
            Consectetur vero eos et accusamus, adipiscing elit. Sed
            sodales nibh et suscipit placerat. Cras et odio ante.
            Praesent elit massa, pharetra et lacus id, gravida congue
            nulla. Donec in tempor odio. Maecenas bibendum sagittis
            laoreet. Proin mauris erat, viverra eget neque at, congue
            posuere erat.
          </p>
          <h3>Política de tanque lleno</h3>
          <p>
            At vero eos et accusamus, consectetur adipiscing elit. Sed
            sodales nibh et suscipit placerat. Cras et odio ante.
            Praesent elit massa, pharetra et lacus id, gravida congue
            nulla. Donec in tempor odio. Maecenas bibendum sagittis
            laoreet. Proin mauris erat, viverra eget neque at, congue
            posuere erat.
          </p>
          <h3>Protección en caso de robo</h3>
          <p>
            Consectetur vero eos et accusamus, adipiscing elit. Sed
            sodales nibh et suscipit placerat. Cras et odio ante.
            Praesent elit massa, pharetra et lacus id, gravida congue
            nulla. Donec in tempor odio. Maecenas bibendum sagittis
            laoreet. Proin mauris erat, viverra eget neque at, congue
            posuere erat.
          </p>
          <div className="clearfix" />


          {/* <div className="mt_car--features-group post-specifications">
            <h4 className="content-car-heading">Specifications</h4>
            <div className="row mt_car-specifications">
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" /> Pickup
                Location: <strong>Meet &amp; Greet</strong>
              </div>
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" /> Fuel
                Policy: <strong>Full to Full</strong>
              </div>
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" />{" "}
                Mileage allowance: <strong>Unlimited</strong>
              </div>
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" />{" "}
                Gearbox: <strong>Auto</strong>
              </div>
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" /> Doors:{" "}
                <strong>4 Doors</strong>
              </div>
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" />{" "}
                Passengers: <strong>4 Pass</strong>
              </div>
              <div className="col-md-4">
                <i className="icon-arrow-right-circle icons" />{" "}
                Luggage: <strong>6 Bags</strong>
              </div>
            </div>
          </div> */}


          <div className="mt_car--features-group post-features">
            {/* POST FEATURES */}
            <h4 className="content-car-heading">Características</h4>
            <div className="single-post-tags row">
              <CarFeatures data={data.features}/>
            </div>
          </div>
          <div className="clearfix" />
          <div className="clearfix" />
          <div className="clearfix" />
          
        </div>
      </div>






      <div className="col-md-4 sidebar-content">
        {/* Booking Form */}
        <div className="mt_car--booking-form">
          <div role="form" className="wpcf7" id="wpcf7-f7711-p7455-o1" lang="en-US" dir="ltr">
            <ReservationForm vehicle={VehicleId} />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</article>

        );
    }
}
export default Reservation;