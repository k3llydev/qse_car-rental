import React, { Component } from 'react'
import './css/VehiclesStylesCorrections.css'
import VehiclesContent from './VehiclesContent'
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
            if(this.categoryExists(category)){
                this.setState({
                    displayState: category
                })
            }else if( typeof category == "undefined"){
                this.setState({
                    displayState: 0
                })
            }else{
                this.setState({
                    displayState: -1
                })
            }
    }

    render(){
        return(
                (this.state.displayState > 1 ? <VehiclesContent displayState={this.state.displayState} /> : <VehiclesContent displayState={this.state.displayState} /> )
        );
    }
}
export default Vehicles;