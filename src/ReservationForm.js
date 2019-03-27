import React, { Component } from 'react'

class ReservationForm extends Component{

    // state = {
    //     show: false
    // }

    receivedConfirmation = (data) => {
        // this.setState({
        //     show: true,
        //     key: data.key
        // })
        alert(data.key)
    }

    formHandle = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch("http://192.168.64.2/qse-api/send.php", {
            method: "post",
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((data) =>  this.receivedConfirmation(data))
            .catch((err)=>console.log(err))

    }

    render(){
        const vehiclesAddress = "DIRECCIÓN FIJA AQUÍ"
        return(
            <form className="wpcf7-form" onSubmit={this.formHandle}>
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
                    />
                  </span>{" "}
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
                      className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                      placeholder="yyyy-mm-dd"
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
                      className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                      placeholder="yyyy-mm-dd"
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