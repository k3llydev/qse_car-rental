import React, {Component} from 'react'
import {VehicleCategories, Disccounts} from './CustomFormData'

class ReservationPrice extends Component{

    constructor(props){
        super(props)
        this.state = {
            FinalPrice: 0,
            VehicleData: []
        }
    }

    componentDidMount(){
        var data = []
        VehicleCategories.map(ctg=>{
            ctg.results.map(vehicle=>{
                data = (vehicle.value == this.props.vehicle ? vehicle : data)
            })
        })
        var seconds = Number(this.props.rentTime) // 1000;
        var dys = Math.floor(seconds / (3600*24));
        seconds  -= dys*3600*24;
        var hrs   = Math.floor(seconds / 3600);
        seconds  -= hrs*3600;
        var mnts = Math.floor(seconds / 60);
        seconds  -= mnts*60;
        var discount = Disccounts.perWeek
        var price = dys * data.cost.perDay
        var FinalPrice = (dys>=7 ? price * ( 100-discount / 100 ) : price)

        this.setState({
            VehicleData: data,
            FinalPrice: FinalPrice
        })

    }

    formatMoney = (n, c, d, t) => {
        var c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d == undefined ? "." : d,
          t = t == undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
          j = (j = i.length) > 3 ? j % 3 : 0;
      
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
      }

    render(){
        return <span className="TicketPriceText">{this.formatMoney(this.state.FinalPrice)}</span>
    }
}
export default ReservationPrice