import React, {Component} from 'react'
import './css/CustomSearchForm.css'
import {OfficeLocations, VehicleCategories} from './CustomFormData'
import { Redirect } from 'react-router'
import Cookies from 'universal-cookie'

const cookies = new Cookies()


class CustomSearchForm extends Component{

    constructor(){
        super()
        this.state = {
            minDate: this.today(),
            rentDay: this.today(),
            backDay: this.today(),
            rentHour: "",
            backHour: "",
            rentPlace: 0,
            backPlaceLabel: "Seleccione un lugar...",
            backPlaceValue: "",
            rentTime: 0,
            featureOptions: "",
            formIsValid: false
        }
    }

    addTimes = (startTime, endTime) => {
        var s1 = new Date("0 "+startTime).getTime() / 1000 | 0
        var s2 = new Date("0 "+endTime).getTime() / 1000 | 0
        return (s1 - s2) * -1
      }

    validateFormData = () => {
        if( this.state.rentHour == "" || this.state.backHour == "" || (this.state.backDay < this.state.rentDay) || this.state.rentPlace == 0 || this.state.backPlaceValue == 0 ){
            //Error in form data
            alert("Pending fields...")
            this.setState({
                formIsValid: false
            })
        }else{
            this.setState({
                formIsValid: true
            })
        }
    }

    vehicleSearch = (e) => {
        e.preventDefault()
        var msd = new Date(this.state.rentDay).getTime() / 1000 | 0
        var msb = new Date(this.state.backDay).getTime() / 1000 | 0
        var hoursSum = this.addTimes(this.state.rentHour, this.state.backHour)
        var rT = (msb-msd)+hoursSum
        this.setState({
            rentTime: rT
        })
        this.validateFormData()
    }

    // loadRentOptions = (element) => {
    //     OfficeLocations.forEach((office)=>{
    //         element.append('<option value="'+office.value+'">'+office.address+'</option>')
    //     })
    // }

    today = () => {
        var dtToday = new Date();
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        return year + '-' + month + '-' + day;
    }

    setMinDate = (event) => {
        this.setState({
            minDate: event.target.value,
            rentDay: event.target.value,
            backDay: this.state.rentDay,
        })
    }

    updateBackDay = (event) => {
        this.setState({
            backDay: event.target.value
        })
    }

    handleBackHourChange = (event) =>{
        this.setState({
            backHour: event.target.value
        })
    }

    handleRentHourChange = (event) =>{
        this.setState({
            rentHour: event.target.value
        })
    }

    outputHours = () => {
        const start = "9:00"
        const end = "16:00"
        const interval = 30
        var s = start.split(':').map(e => +e);
        var e = end.split(':').map(e => +e);
        var res = [];
        var JSX = []
        var t = [];
        while (!(s[0] == e[0] && s[1] > e[1])) {
            t.push(s[0] + ':' + (s[1] < 10 ? '0' +s[1] : s[1]));
            s[1] += interval;
            if (s[1] > 59) {
                s[0] += 1;
                s[1] %= 60;
            }
        }
        for (var i = 0; i < t.length - 1; i++) {
            res.push(t[i]);
        }
        res.pop()
        res.map((hour)=>{
            JSX.push(<option value={hour}>{hour}</option>)
        })
        return JSX
    }

    handleRentPlaceChange = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        this.setState({
            rentPlace: event.target.value,
            backPlaceLabel: event.nativeEvent.target[index].text,
            backPlaceValue: event.target.value
        })
    }

    handleFeatureOptions = (event) => {
        this.setState({
            featureOptions: event.target.value
        })
    }

    setReservationCookies = () =>{
        var startDate = this.state.rentDay
        var endDate = this.state.backDay
        var rentTime = this.state.rentTime
        var rentPlace = this.state.rentPlace
        var backPlace = this.state.backPlaceValue

        //UNSET FIRST
        cookies.remove("startDate",startDate)
        cookies.remove("endDate",endDate)
        cookies.remove("rentTime", rentTime)
        cookies.remove("rentPlace", rentPlace)
        cookies.remove("backPlace", backPlace)

        cookies.set("startDate",startDate)
        cookies.set("endDate",endDate)
        cookies.set("rentTime", rentTime)
        cookies.set("rentPlace", rentPlace)
        cookies.set("backPlace", backPlace)
    }

    render(){
        const outputHours = this.outputHours.bind(this)
        var renderedLocationOptions = -1
        if(this.state.formIsValid){
            this.setReservationCookies()
            // return <Redirect to={ (this.state.featureOptions == "" ) ? "/vehicles/" : "/vehicles/?category="+this.state.featureOptions } />
            window.location.href = (this.state.featureOptions == "" ) ? "/vehicles/" : "/vehicles/?category="+this.state.featureOptions
        }
        return(
            <form
  id="res-form"
  name="resForm"
  onSubmit={this.vehicleSearch}
  style={{ backgroundColor: "transparent" }}
  noValidate="novalidate"
>
  <div className="motorespon">
    <div className="titulos">
      <div className="tital">BUSCADOR</div>
    </div>
    <div className="alquiler">
      <br /> &nbsp;


      <div className="rentSide">
      <center><h4>ENTREGA:</h4></center>
        <div className="CustomSearchFormItem"><label for="rentPlace">LUGAR:&nbsp;</label>
            <select name="rentPlace" value={this.state.rentPlace} onChange={this.handleRentPlaceChange}>
                {/* <option value="">Seleccione un lugar...</option> */}
                {
                    OfficeLocations.map(function(office) {
                        renderedLocationOptions++
                        return <option id={office.address} value={office.value}>{office.address}</option>;
                    })
                }
            </select>
        </div>
        <div className="CustomSearchFormItem"><label for="rentDay">FECHA:&nbsp;</label><input type="date" name="rentDay" min={this.today()} onChange={ this.setMinDate } value={ this.state.rentDay } /></div>
        <div className="CustomSearchFormItem"><label for="rentHour">HORA:&nbsp;</label>
            <select name="rentHour" onChange={this.handleRentHourChange}>
                <option value="">Seleccione una hora...</option>
                {
                    outputHours()
                }
            </select>
        </div>
      </div>

      <div className="backSide">
        <center><h4>REGRESO:</h4></center>
            <div className="CustomSearchFormItem"><label for="backPlace">LUGAR:&nbsp;</label>
                <select name="backPlace">
                    <option value={this.state.backPlaceValue}>{this.state.backPlaceLabel}</option>
                </select>
            </div>
            <div className="CustomSearchFormItem"><label for="backDay">FECHA:&nbsp;</label><input type="date" name="backDay" min={this.state.rentDay} onChange={this.updateBackDay} value={ this.state.backDay} /></div>
            <div className="CustomSearchFormItem"><label for="backHour">HORA:&nbsp;</label>
                <select name="backHour" value={this.state.backHour} onChange={this.handleBackHourChange}>
                    <option value="">Seleccione una hora...</option>
                    {
                        outputHours()
                    }
                </select>
            </div>
      </div>




    </div>
        <div className="featureSelect">
            <h4>CATEGORÍA</h4>
            <select name="featureOptions" value={this.state.featureOptions} onChange={this.handleFeatureOptions} >
                    <option value="">Todos los vehículos</option>
                    {
                        VehicleCategories.map(category=>{
                            return <option value={category.typeId}>{category.title}</option>
                        })
                    }
            </select>
        </div>
    
    
  </div>
  <div className="buttone">
    <button
      className="primary"
      type="submit"
      id="enviar"
      style={{ fontSize: 15, width: 250, height: 55 }}
    >
      Reservar
    </button>
  </div>



</form>

        );
    }
}
export default CustomSearchForm;