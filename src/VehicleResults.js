import React, {Component} from 'react'
import * as qs from 'query-string';
import {VehicleCategories} from './CustomFormData'
import {Redirect} from 'react-router'

const parsedQuery = qs.parse(window.location.search, { ignoreQueryPrefix: true } );
const category = ( parsedQuery.category === null ? false : parsedQuery.category )

class VehicleImportantFeatures extends Component{
    render(){
        var JSX = []
        this.props.features.forEach(feature=>{
            JSX.push(
                <div className="single-post-tags">
                  <div className="col-md-6 single-car-feature">
                    <i className="fas fa-check-circle" />{" "}
                    <a
                      href="javascript:void(0)"
                      rel="tag"
                    >
                      {feature}
                    </a>
                  </div>
                </div>
            )
        })
        return JSX
    }
}

class VehicleArticle extends Component{

    constructor(){
        super()
        this.state = {
            redirect: false,
            vehicle: 0
        }
    }
    redirectToReservation = (key) =>{
        this.setState({
            redirect: true,
            vehicle: key
        })
    }

    render(){
        var data = this.props.vehicle
        if(this.state.redirect){
            return <Redirect to={"/reservation/?vid="+this.state.vehicle} />
        }
        return(
            <article
  id="post-7455"
  className="single-post list-view col-md-12 post-7455 mt_car type-mt_car status-publish has-post-thumbnail hentry mt-car-category-toyota mt-car-type-pasajeros mt-car-features-portabotellas mt-car-features-aire-acondicionado mt-car-features-bluetooth mt-car-features-cabeceras-delanteras mt-car-features-calefaccion mt-car-features-cristales-electricos mt-car-features-gps-navigation mt-car-features-portadocumentos mt-car-features-portamonedas mt-car-features-portavasos-desplegables mt-car-features-portavasos-fijos mt-car-features-reproductor-cd mt-car-features-revisteros mt-car-features-sistema-audio"
>
  <div className="blog_custom row">
    <div className="col-md-12 post-details">
      <div className="row">
        <div className="col-md-8 mt_cars--main-pic">
            <div className="absolute gradient-holder-category" />
            <img
              className="blog_post_image"
              src={data.image}
              alt="Car"
            />
          <h3 className="post-name absolute">
            {data.label} /
              {this.props.category}
          </h3>
        </div>
        <div className="col-md-4 mt_cars--features-description">
          <a
            onClick={this.redirectToReservation.bind(this, data.value)}
            className="relative preciodia"
          >
            <div className="mt_car--price-day mt_car--price">
              <span className="reserva">
                RESERVAR<br />
                <span className="car_currency">$</span>{" "}
                <span className="car_price">{data.cost.perDay}</span>
                <span className="car_per"> Por Día</span>
              </span>
            </div>
          </a>


          <div className="post-category-comment-date row">
            <VehicleImportantFeatures features={data.features} />
          </div>



          <div className="mt_car--important-features col-md-12">
            {/* POST IMPORTANT FEATURES */}
            <span className="col-md-4 text-left car_number_passengers">
              <img
                src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon4.png"
                alt="passengers"
                height={30}
                width={30}
              />
              <span className="car_number_passengers_value">
                {data.passengers} {(data.passengers > 1 ? "Pasajeros" : "Pasajero")}
              </span>
            </span>
            <span className="col-md-4 text-left car_luggage">
              <img
                src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon2.png"
                alt="luggage"
                height={30}
                width={30}
              />
              <span className="car_luggage_value">{data.capacity} {(data.capacity > 1 ? "Maletas" : "Maleta")}</span>
            </span>
            <span className="col-md-4 text-left car_gearbox">
              <img
                src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon1.png"
                alt="gearbox"
                height={30}
                width={30}
              />
              <span className="car_gearbox_value">{data.transmission}</span>
            </span>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  <div className="car_separator" />
</article>
        )
    }
}


class VehicleResults extends Component{
 
    render(){
        var JSX = []
        var displayState = this.props.displayState
        if(displayState >= 1 ){
            VehicleCategories.map(ctg=>{
                if(ctg.typeId == category){
                    ctg.results.map(vehicle=>{
                        JSX.push(<VehicleArticle category={ctg.title} vehicle={vehicle} />)
                    })
                }
            })
        }else if( displayState === 0 ){
            JSX.push(<h1>Show all</h1>)
        }else{
            JSX.push(<h1>No results</h1>)
        }
        return JSX
    }
}
export default VehicleResults