import React, {Component} from 'react'
import HomeFooter from './HomeFooter'

class ReservationKey extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div style={{
            marginTop: "100px"
        }}><center>
            <h1>¡Tu vehículo se ha reservado exitosamente!</h1>
            <span>En breve recivirás un correo en la dirección que especificaste con los detalles de tu reserva.</span><br />
            <span>Gracias por tu preferencia...</span><br /><br /><br />
            <h1>Clave de reservación: QSE-{this.props.RK}</h1>
            </center><br /><br /><br /><br /><br /><HomeFooter /></div>
    }
}
export default ReservationKey