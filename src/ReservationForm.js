import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import {OfficeLocations, Disccounts, VehicleCategories} from './CustomFormData'

const cookies = new Cookies();

class ReservationForm extends Component{

    // state = {
    //     show: false
    // }
    constructor(props){
      super(props)
      var vehiclesAddress = "Invalid address";
        OfficeLocations.map(o=>{
          vehiclesAddress = (o.value == cookies.get("rentPlace") ? o.address : vehiclesAddress)
        })

      var vd = []
      VehicleCategories.map(cat=>{
        cat.results.map(veh=>{
          vd = ( veh.value == this.props.vehicle ? veh : vd )
        })
      })


        var data = vd
        var seconds = Number(cookies.get("rentTime")) // 1000;
        var dys = Math.floor(seconds / (3600*24));
        seconds  -= dys*3600*24;
        var hrs   = Math.floor(seconds / 3600);
        seconds  -= hrs*3600;
        var mnts = Math.floor(seconds / 60);
        seconds  -= mnts*60;
        var discount = Disccounts.perWeek
        var price = dys * data.cost.perDay
        var FinalPrice = (dys>=7 ? price * ( 100-discount / 100 ) : price)

      this.state = {
        vehicleData: vd,
        name: "",
        email: "",
        phone: "",
        rentPlace: vehiclesAddress,
        rentDate: cookies.get("startDate"),
        rentHour: cookies.get("rentHour"),
        backPlace: vehiclesAddress,
        backDate: cookies.get("endDate"),
        backHour: cookies.get("backHour"),
        rentTime: cookies.get("rentTimeLabel"),
        vehicle: vd.label,
        features: JSON.stringify(vd.features),
        total: FinalPrice
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
      this.setState({
        features: JSON.stringify(this.state.vehicleData.features)
      })
      this.setPrice()
      return exists
    }

    setPrice = () =>{
        var data = this.state.vehicleData
        var seconds = Number(cookies.get("rentTime")) // 1000;
        var dys = Math.floor(seconds / (3600*24));
        seconds  -= dys*3600*24;
        var hrs   = Math.floor(seconds / 3600);
        seconds  -= hrs*3600;
        var mnts = Math.floor(seconds / 60);
        seconds  -= mnts*60;
        var discount = Disccounts.perWeek
        var price = dys * data.cost.perDay
        var FinalPrice = (dys>=7 ? price * ( 100-discount / 100 ) : price)
        console.log("Final price is: "+FinalPrice)
        this.setState({
          total: FinalPrice
        })
    }


    receivedConfirmation = (data) => {
        window.location.href="/reservation/"+data
    }

    formHandle = (event) => {
        event.preventDefault();
        var data = {
          name: this.state.name,
          email: btoa(this.state.email),
          phone: this.state.phone,
          rentPlace: this.state.rentPlace,
          rentDate: this.state.rentDate,
          rentHour: this.state.rentHour,
          backPlace: this.state.backPlace,
          backDate: this.state.backDate,
          backHour: this.state.backHour,
          rentTime: this.state.rentTime,
          vehicle: this.state.vehicle,
          features: this.state.features,
          total: this.state.total
        }

        fetch("http://qserviceexp.com/api/", {
            method: "post",
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((data) =>  this.receivedConfirmation(data))
            .catch((err)=>console.log(err))

    }

    handleNameChange = (event) =>{
      this.setState({
        name: event.target.value
      })
    }

    handleEmailChange = (event) =>{
      this.setState({
        email: event.target.value
      })
    }

    handlePhoneChange = (event) =>{
      this.setState({
        phone: event.target.value
      })
    }

    render(){
        var vehiclesAddress = "Invalid address";//OfficeLocations.map(o=>{ return (o.value == cookies.get("rentPlace") ? o.address : "")} )
        OfficeLocations.map(o=>{
          vehiclesAddress = (o.value == cookies.get("rentPlace") ? o.address : vehiclesAddress)
        })
        return(
            <form name="reservationForm" className="wpcf7-form" onSubmit={this.formHandle}>
                {/* <SweetAlert
                    show={this.state.show}
                    title="Su reservación fue exitosa."
                    text={"Porfavor revise su correo.\n Clave de reservación: "+this.state.key}
                    onConfirm={() => this.setState({ show: false })}
                /> */}
              <p>
                <label>
                  Nombre completo
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="your-name"
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Ingrese su nombre completo…"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  Correo electrónico <sup>*Se le enviará información</sup>
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="email"
                      name="your-email"
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      placeholder="Ingrese su correo…"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Número telefónico
                  <br />
                  <span className="wpcf7-form-control-wrap text-phone-number">
                    <input
                      type="text"
                      name="text-phone-number"
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Ingrese su número de teléfono…"
                      value={this.state.phone}
                      onChange={this.handlePhoneChange}
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Dirección de entrega
                  <br />
                  <span className="wpcf7-form-control-wrap pickup-address">
                    <input
                      type="text"
                      name="pickup-address"
                      value={vehiclesAddress}
                      disabled
                      size={40}
                      className="wpcf7-form-control wpcf7-text"
                      placeholder="Pickup Address"
                      disabled
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Fecha de entrega
                  <br />
                  <span className="wpcf7-form-control-wrap pickup-date">
                    <input
                      type="date"
                      name="pickup-date"
                      value={cookies.get("startDate")}
                      className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                      placeholder="yyyy-mm-dd"
                      disabled
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Hora de entrega
                  <br />
                  <span className="wpcf7-form-control-wrap pickup-time">
                    <input
                      type="text"
                      name="pickup-time"
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="hh:mm"
                      value={cookies.get("rentHour")}
                      disabled
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Dirección de regreso
                  <br />
                  <span className="wpcf7-form-control-wrap dropoff-address">
                    <input
                      type="text"
                      name="dropoff-address"
                      size={40}
                      className="wpcf7-form-control wpcf7-text"
                      placeholder="Pickup Address"
                      value={vehiclesAddress}
                      disabled
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Fecha de regreso
                  <br />
                  <span className="wpcf7-form-control-wrap dropoff-date">
                    <input
                      type="date"
                      name="dropoff-date"
                      value={cookies.get("endDate")}
                      className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                      placeholder="yyyy-mm-dd"
                      disabled
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  Hora de regreso
                  <br />
                  <span className="wpcf7-form-control-wrap dropoff-time">
                    <input
                      type="text"
                      name="dropoff-time"
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="hh:mm"
                      value={cookies.get("backHour")}
                      disabled
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <input
                  type="submit"
                  value="Reservar"
                  className="wpcf7-form-control wpcf7-submit"
                />
                <span className="ajax-loader" />
              </p>
              <div className="wpcf7-response-output wpcf7-display-none" />
            </form>
        );
    }
}
export default ReservationForm;