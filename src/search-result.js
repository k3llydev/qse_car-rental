import React, {Component} from 'react'
import './css/SearchResult.css'
import './css/SearchResultItems.css'


class CarCharacteristic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-6 single-car-feature">
                <i className="fa fa-check-circle-o" />{" "}
                    <a
                        href="http://qserviceexp.com/new/car-feature/portabotellas/"
                        rel="tag"
                    >
                        {this.props.text}
                    </a>
            </div>
        );
    }
}

class SearchResultItem extends Component{
    state = {
        renderedElements: 0
    }

    constructor(props){
        super(props)
    }

    showCharacteristics = () => {
        var results = [];
        this.props.data.characteristics.forEach(function(ch){
            results.push(<CarCharacteristic text={ch} />);
        });
        return results;
    };

    renderedElement = () => {
        this.setState( prevState => {
            this.state = {
                renderedElements: prevState.renderedElements + 1
            }
        })
    }

    render(){
        var data = this.props.data
        var renderedElements = document.getElementsByClassName("blog-posts").length

        if( document.getElementsByClassName("blog-posts") != false ){
        return(
                    <div className="container blog-posts">
                        <div className="row">
                        <div className="col-md-12 main-content">
                            <div className="row">
                            <article
                                id="post-7414"
                                className="single-post list-view col-md-12 post-7414 mt_car type-mt_car status-publish has-post-thumbnail hentry mt-car-category-jetta mt-car-type-pasajeros mt-car-type-sedan mt-car-features-portabotellas mt-car-features-aire-acondicionado mt-car-features-bluetooth mt-car-features-cabeceras-delanteras mt-car-features-calefaccion mt-car-features-cristales-electricos mt-car-features-portadocumentos mt-car-features-portamonedas mt-car-features-portavasos-desplegables mt-car-features-portavasos-fijos mt-car-features-reproductor-cd mt-car-features-revisteros mt-car-features-sistema-audio"
                            >
                                <div className="blog_custom row">
                                <div className="col-md-12 post-details">
                                    <div className="row">
                                    <div className="col-md-8 mt_cars--main-pic">
                                        <a
                                        href={data.reservationURL}
                                        className="relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            className="blog_post_image"
                                            src={data.carImage}
                                            alt={data.carName}
                                        />{" "}
                                        </a>
                                        <h3 className="post-name absolute">
                                        Jetta /{" "}
                                        <a
                                            href="http://qserviceexp.com/new/car-type/pasajeros/"
                                            rel="tag"
                                        >
                                            Pasajeros
                                        </a>{" "}
                                        <a
                                            href="http://qserviceexp.com/new/car-type/sedan/"
                                            rel="tag"
                                        >
                                            Sedan
                                        </a>
                                        </h3>
                                    </div>
                                    <div className="col-md-4 mt_cars--features-description">
                                        <a
                                        href={data.reservationURL}
                                        className="relative preciodia"
                                        >
                                        <div className="mt_car--price-day mt_car--price">
                                            <span className="reserva">
                                            Reservar<br />
                                            <span className="car_currency">$</span>{" "}
                                            <span className="car_price">{data.cost}</span>
                                            <span className="car_per"> {data.rentalModality}</span>
                                            </span>
                                        </div>
                                        </a>
                                        <div className="post-category-comment-date row">


                                        <div className="single-post-tags">
                                            {this.showCharacteristics()}
                                        </div>
        
        
                                        </div>
                                        <div className="mt_car--important-features col-md-12">
                                        <span className="col-md-4 text-left car_number_passengers">
                                            <img
                                            src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon4.png"
                                            alt="passengers"
                                            height={30}
                                            width={30}
                                            />
                                            <span className="car_number_passengers_value">
                                            {data.passengersCapacity} Pasajeros
                                            </span>
                                        </span>
                                        <span className="col-md-4 text-left car_luggage">
                                            <img
                                            src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon2.png"
                                            alt="luggage"
                                            height={30}
                                            width={30}
                                            />
                                            <span className="car_luggage_value">
                                            {data.equipmentCapacity} Maletas
                                            </span>
                                        </span>
                                        <span className="col-md-4 text-left car_gearbox">
                                            <img
                                            src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon1.png"
                                            alt="gearbox"
                                            height={30}
                                            width={30}
                                            />
                                            <span className="car_gearbox_value">
                                            {data.transmisionType}
                                            </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_1_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_1_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_1_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_4_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_4_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_4_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_5_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_5_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_5_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_7_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_7_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_7_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="car_separator" />
                            </article>
                            <div className="modeltheme-pagination-holder col-md-12">
                                <div className="modeltheme-pagination pagination" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        );
        }else{
            return(
                <div className="high-padding">
                    <div className="container blog-posts">
                        <div className="row">
                        <div className="col-md-12 main-content">
                            <div className="row">
                            <article
                                id="post-7414"
                                className="single-post list-view col-md-12 post-7414 mt_car type-mt_car status-publish has-post-thumbnail hentry mt-car-category-jetta mt-car-type-pasajeros mt-car-type-sedan mt-car-features-portabotellas mt-car-features-aire-acondicionado mt-car-features-bluetooth mt-car-features-cabeceras-delanteras mt-car-features-calefaccion mt-car-features-cristales-electricos mt-car-features-portadocumentos mt-car-features-portamonedas mt-car-features-portavasos-desplegables mt-car-features-portavasos-fijos mt-car-features-reproductor-cd mt-car-features-revisteros mt-car-features-sistema-audio"
                            >
                                <div className="blog_custom row">
                                <div className="col-md-12 post-details">
                                    <div className="row">
                                    <div className="col-md-8 mt_cars--main-pic">
                                        <a
                                        href={data.reservationURL}
                                        className="relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            className="blog_post_image"
                                            src={data.carImage}
                                            alt={data.carName}
                                        />{" "}
                                        </a>
                                        <h3 className="post-name absolute">
                                        Jetta /{" "}
                                        <a
                                            href="http://qserviceexp.com/new/car-type/pasajeros/"
                                            rel="tag"
                                        >
                                            Pasajeros
                                        </a>{" "}
                                        <a
                                            href="http://qserviceexp.com/new/car-type/sedan/"
                                            rel="tag"
                                        >
                                            Sedan
                                        </a>
                                        </h3>
                                    </div>
                                    <div className="col-md-4 mt_cars--features-description">
                                        <a
                                        href={data.reservationURL}
                                        className="relative preciodia"
                                        >
                                        <div className="mt_car--price-day mt_car--price">
                                            <span className="reserva">
                                            Reservar<br />
                                            <span className="car_currency">$</span>{" "}
                                            <span className="car_price">{data.cost}</span>
                                            <span className="car_per"> {data.rentalModality}</span>
                                            </span>
                                        </div>
                                        </a>
                                        <div className="post-category-comment-date row">


                                        <div className="single-post-tags">
                                            {this.showCharacteristics()}
                                        </div>
        
        
                                        </div>
                                        <div className="mt_car--important-features col-md-12">
                                        <span className="col-md-4 text-left car_number_passengers">
                                            <img
                                            src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon4.png"
                                            alt="passengers"
                                            height={30}
                                            width={30}
                                            />
                                            <span className="car_number_passengers_value">
                                            {data.passengersCapacity} Pasajeros
                                            </span>
                                        </span>
                                        <span className="col-md-4 text-left car_luggage">
                                            <img
                                            src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon2.png"
                                            alt="luggage"
                                            height={30}
                                            width={30}
                                            />
                                            <span className="car_luggage_value">
                                            {data.equipmentCapacity} Maletas
                                            </span>
                                        </span>
                                        <span className="col-md-4 text-left car_gearbox">
                                            <img
                                            src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/theme_rentacar_icon1.png"
                                            alt="gearbox"
                                            height={30}
                                            width={30}
                                            />
                                            <span className="car_gearbox_value">
                                            {data.transmisionType}
                                            </span>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_1_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_1_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_1_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_4_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_4_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_4_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_5_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_5_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_5_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    <div className="col-md-3 mt_cars--extra-pics">
                                        <a
                                        href="http://qserviceexp.com/new/car/bmw-x5/"
                                        className="mt_cars--extra-pics-holder relative"
                                        >
                                        <div className="absolute gradient-holder-category" />
                                        <img
                                            width={300}
                                            height={180}
                                            src="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_7_1080x720-300x180.jpg"
                                            className="attachment-rentacarwp_car_archive_thumbnail size-rentacarwp_car_archive_thumbnail"
                                            alt
                                            srcSet="http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_7_1080x720-300x180.jpg 300w, http://qserviceexp.com/new/wp-content/uploads/2017/05/821056239_7_1080x720-500x300.jpg 500w"
                                            sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="car_separator" />
                            </article>
                            <div className="modeltheme-pagination-holder col-md-12">
                                <div className="modeltheme-pagination pagination" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
      
}



class SearchResult extends Component{

    constructor(){
        super()
        this.state = {
            data: JSON.parse('[ { "reservationURL":"carro1", "carName":"carro1", "carImage":"no image", "cost":999, "rentalModality":"per year", "passengersCapacity":6, "equipmentCapacity":4, "transmisionType":"Manual", "characteristics":[ "Char 1", "Char 2", "Char 3" ] }, { "reservationURL":"carro2", "carName":"carro2", "carImage":"no image", "cost":333, "rentalModality":"per day", "passengersCapacity":2, "equipmentCapacity":1, "transmisionType":"Autom.", "characteristics":[ "Char 1", "Char 2", "Char 3" ] } ]')
        };
    }

    ShowResults = () => {
        var results = [];
        this.state.data.forEach(element => {
            results.push(<SearchResultItem data={element} />); 
        });
        return results;
    }

    render(){
        return (
            <div>
                {this.ShowResults()}
            </div>
        );
    }

}

export default SearchResult;