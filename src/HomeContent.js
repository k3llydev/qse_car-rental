import React, {Component} from 'react'
import SearchForm from './SearchForm'
//import './css/background-image.css'
import './css/responsive-fix.css'

const images = {
    "AutoTexto" : "https://i.imgur.com/tYZfQtN.png",
    "Prepago" : "https://i.imgur.com/51eVyU3.png",
    "SinCargos" : "https://i.imgur.com/BnfyRQu.png",
    "TarifasBajas" : "https://i.imgur.com/IutTJpj.png",
    "TodoIncluido" : "https://i.imgur.com/tHmsppu.png",
    "SinCargosExtras" : "https://i.imgur.com/JVtkSoO.png",
    "CualquierOcasion" : "https://i.imgur.com/os3rO1S.png",
    "Facil" : "https://i.imgur.com/6RwosZQ.png",
    "Seguridad" : "https://i.imgur.com/MpPoBVI.png"
}

class HomeContent extends Component{
    render(){
        return(
            <div id="primary" className="no-padding content-area no-sidebar">
    {/*
    <div class=""> */}
        <div className="container">
            <div className="row">
                <main id="main" className="col-md-12 site-main main-content">
                    <article id="post-869" className="post-869 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1543111827923 up" style={{zIndex:9999999}}>
                                <div className="gambit_parallax_inner parallax-inner-1553285746427 up" style={{pointerEvents: 'none', width: '100%', height: '1135px', position: 'absolute', zIndex: -1, top: '0px', left: '0px', opacity: 1, backgroundSize: '1918px 1208.62px', backgroundRepeat: 'no-repeat', backgroundImage: 'url("http://qserviceexp.com/new/wp-content/uploads/2018/11/Banner_principa.jpg")', transition: 'transform 0s linear -1ms', transform: 'translate3d(0px, -78.2898px, 0px)'}} />
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                    
                                        <div className="wpb_wrapper">
                                            <div className="gambit_parallax_row" data-bg-align data-direction="up" data-opacity={100} data-velocity="-0.1" data-mobile-enabled data-bg-height={949} data-bg-width={1506} data-bg-image="http://qserviceexp.com/new/wp-content/uploads/2018/11/Banner_principa.jpg" data-bg-repeat="false" style={{display: 'none', zIndex: -1}} data-zindex={-1} />
                                            <div className="vc_empty_space" style={{height: '35px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_appear appear wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={903} height={631} src={images['AutoTexto']} className="vc_single_image-img attachment-full" sizes="(max-width: 903px) 100vw, 903px" /></div>
                                                </figure>
                                            </div>
                                            <div className="vc_empty_space" style={{height: '45px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                <div className="wpb_column vc_column_container vc_col-sm-1">
                                                    <div className="vc_column-inner ">
                                                        <div className="wpb_wrapper" /></div>
                                                </div>
                                                <div className="wpb_column vc_column_container vc_col-sm-10">
                                                    <div className="vc_column-inner ">
                                                        <div className="wpb_wrapper">
                                                            <div className="wpb_text_column wpb_content_element ">
                                                                <div className="wpb_wrapper">
                                                                    <div className="mt-car-search">
                                                                        <SearchForm />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wpb_column vc_column_container vc_col-sm-1">
                                                    <div className="vc_column-inner ">
                                                        <div className="wpb_wrapper" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="vc_row-full-width vc_clearfix" />

                            <div style={{marginTop:"100px"}} className="vc_row wpb_row section1-home">
                                <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1492682264649">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={150} height={150} src={images['Prepago']} className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 150px) 100vw, 150px" /></div>
                                                </figure>
                                            </div>
                                            <h2 style={{fontSize: '23px', color: '#ffffff', lineHeight: '45px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_appear appear wpb_start_animation animated">PREPAGO</h2>
                                            <div className="vc_empty_space" style={{height: '10px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: '#fff'}}>Sin hacer filas, prepaga en línea la renta de tu auto</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1492682278720">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={150} height={150} src="http://qserviceexp.com/new/wp-content/uploads/2018/11/Seguridad.png" className="vc_single_image-img attachment-thumbnail" alt /></div>
                                                </figure>
                                            </div>
                                            <h2 style={{fontSize: '23px', color: '#ffffff', lineHeight: '45px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_appear appear wpb_start_animation animated">SEGURIDAD</h2>
                                            <div className="vc_empty_space" style={{height: '10px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: '#fff'}}>Ofrecemos tarifas con seguros incluidos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1492682290097">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={150} height={150} src={images['SinCargos']} className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 150px) 100vw, 150px" /></div>
                                                </figure>
                                            </div>
                                            <h2 style={{fontSize: '23px', color: '#ffffff', lineHeight: '45px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_appear appear wpb_start_animation animated">SIN CARGOS OCULTOS</h2>
                                            <div className="vc_empty_space" style={{height: '10px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: '#fff'}}>Al recoger tu auto en la oficina no se te cobrarán cargos adicionales</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1492780385525 vc_row-has-fill">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner vc_custom_1492777609582">
                                        <div className="wpb_wrapper">
                                            <div className="blog-posts car-posts blog-posts-shortcode">
                                                <div className="row" /></div>
                                            <div className="vc_empty_space" style={{height: '22px'}}><span className="vc_empty_space_inner" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1492780396308 vc_row-has-fill">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner vc_custom_1492773786521">
                                        <div className="wpb_wrapper">
                                            <div className="vc_empty_space" style={{height: '65px'}}><span className="vc_empty_space_inner" /></div>
                                            <h1 style={{fontSize: '40px', color: '#0081bb', lineHeight: '40px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading vc_custom_1543093888365">¿POR QUÉ NOS ELIGEN?</h1></div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid services-home2 vc_custom_1492780403758 vc_row-has-fill">
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img src={images['TarifasBajas']} width={104} height={104} sizes="(max-width: 104px) 100vw, 104px" /></div>
                                                </figure>
                                            </div>
                                            <h3 style={{fontSize: '25px', color: '#0081bb', lineHeight: '48px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1543093912908 wpb_start_animation animated">TARIFAS BAJAS:</h3>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: 'rgba(52, 73, 94, 0.7)'}}>Garantizamos el mejor precio en la renta de autos.</p>
                                                </div>
                                            </div>
                                            <div className="vc_empty_space" style={{height: '60px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={104} height={104} src={images['CualquierOcasion']} className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 104px) 100vw, 104px" /></div>
                                                </figure>
                                            </div>
                                            <h3 style={{fontSize: '25px', color: '#0081bb', lineHeight: '48px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1543093961252 wpb_start_animation animated">CUALQUIER OCASIÓN:</h3>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: 'rgba(52, 73, 94, 0.7)'}}>Renta de autos para sus vacaciones, viaje de negocios.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={102} height={102} src={images['TodoIncluido']} className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 102px) 100vw, 102px" /></div>
                                                </figure>
                                            </div>
                                            <h3 style={{fontSize: '25px', color: '#0081bb', lineHeight: '48px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1543093923129 wpb_start_animation animated">TODO INCLUIDO:</h3>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: 'rgba(52, 73, 94, 0.7)'}}>Renta de autos con todo incluido: kilometraje sin límite, todos los seguros e impuestos.</p>
                                                </div>
                                            </div>
                                            <div className="vc_empty_space" style={{height: '60px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={103} height={103} src={images['Facil']} className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 103px) 100vw, 103px" /></div>
                                                </figure>
                                            </div>
                                            <h3 style={{fontSize: '25px', color: '#0081bb', lineHeight: '48px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1543093970134 wpb_start_animation animated">FÁCIL:</h3>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: 'rgba(52, 73, 94, 0.7)'}}>Formas de pago accesibles con seguridad certificada para la renta de su auto.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={107} height={107} src={images['SinCargosExtras']}className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 107px) 100vw, 107px" /></div>
                                                </figure>
                                            </div>
                                            <h3 style={{fontSize: '25px', color: '#0081bb', lineHeight: '48px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1543093933027 wpb_start_animation animated">SIN CARGOS EXTRAS:</h3>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: 'rgba(52, 73, 94, 0.7)'}}>Usted sólo pagará lo que aquí le cotizamos. Sin cargos ocultos u ofertas engañosas.</p>
                                                </div>
                                            </div>
                                            <div className="vc_empty_space" style={{height: '60px'}}><span className="vc_empty_space_inner" /></div>
                                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                                                <figure className="wpb_wrapper vc_figure">
                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={102} height={102} src={images['Seguridad']} className="vc_single_image-img attachment-thumbnail" sizes="(max-width: 102px) 100vw, 102px" /></div>
                                                </figure>
                                            </div>
                                            <h3 style={{fontSize: '25px', color: '#0081bb', lineHeight: '48px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1543093981282 wpb_start_animation animated">SEGURIDAD:</h3>
                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p style={{textAlign: 'center', color: 'rgba(52, 73, 94, 0.7)'}}>Cobertura para el vehículo, daños a terceros y gastos médicos.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            <div id="class-has-to-fix" data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1492777967907 up" style={{
    position: "relative",
    left: "-90px",
    boxSizing: "border-box",
     width: '110%',
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: 150,
    overflow: "hidden",
    zIndex: 1
  }}>
                                <div className="gambit_parallax_inner parallax-inner-1553285746432 up"  style={{
    pointerEvents: "none",
    width: '110%',
    height: 1327,
    position: "absolute",
    zIndex: -2,
    top: 0,
    left: "0px",
    opacity: 1,
    backgroundSize: "2468.42px 1327px",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      'url("http://qserviceexp.com/new/wp-content/uploads/2018/11/Banner_Contacto.jpg")',
    transition: "transform 0s linear -1ms",
    transform: "translate3d(0px, -49.5427px, 0px)"
  }} />
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="gambit_parallax_row" data-bg-align data-direction="up" data-opacity={100} data-velocity="-0.2" data-mobile-enabled data-bg-height={808} data-bg-width={1503} data-bg-image="http://qserviceexp.com/new/wp-content/uploads/2018/11/Banner_Contacto.jpg" data-bg-repeat="false" style={{display: 'none', zIndex: -2}} data-zindex={-2} />
                                            <h1 style={{fontSize: '40px', color: '#ffffff', lineHeight: '70px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading wpb_animate_when_almost_visible wpb_appear appear wpb_start_animation animated">CONTÁCTANOS</h1>
                                            <h1 style={{fontSize: '65px', color: '#ffffff', lineHeight: '70px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading ciudad wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top wpb_start_animation animated">CDMX<br />
                    </h1>
                                            <h1 style={{fontSize: '65px', color: '#d68720', lineHeight: '70px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 700, fontStyle: 'normal'}} className="vc_custom_heading tel wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top wpb_start_animation animated">(55) 8661 1130</h1>
                                            <h3 style={{fontSize: '25px', color: '#ffffff', lineHeight: '35px', textAlign: 'center', fontFamily: 'Ubuntu', fontWeight: 300, fontStyle: 'normal'}} className="vc_custom_heading correo_contacto wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top wpb_start_animation animated">cdmx@qserviceexp.com<br />
                    </h3>
                                            
                                            <div className="vc_empty_space" style={{height: '65px'}}><span className="vc_empty_space_inner" /></div>
                                            <style type="text/css" scoped dangerouslySetInnerHTML={{__html: "\n                .modeltheme_button .btn_custom_5c954271b249a {\n                  background: #ffd600 !important; /* Old browsers */\n                  background: -moz-linear-gradient(top, #ffd600 0%, #ffd600 0%, #ffd600 0%, #ffd600 0%, #ffd600 100%, #ffd600 100%, #ffd600 100%) !important; /* FF3.6-15 */\n                  background: -webkit-linear-gradient(top, #ffd600 0%,#ffd600 0%,#ffd600 0%,#ffd600 0%,#ffd600 100%,#ffd600 100%,#ffd600 100%) !important; /* Chrome10-25,Safari5.1-6 */\n                  background: linear-gradient(to bottom, #ffd600 0%,#ffd600 0%,#ffd600 0%,#ffd600 0%,#ffd600 100%,#ffd600 100%,#ffd600 100%) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n                  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=#ffd600, endColorstr=#ffd600,GradientType=0 ) !important; /* IE6-9 */\n                  transform: scale(1.0);\n                  transition: all 400ms ease-in-out 0s;\n                  -ms-transformtransition: all 400ms ease-in-out 0s;\n                  -webkit-transformtransition: all 400ms ease-in-out 0s;\n                }\n                .modeltheme_button .button-winona:hover {\n                  transform: scale(1.03);\n                  transition: all 400ms ease-in-out 0s;\n                  -ms-transformtransition: all 400ms ease-in-out 0s;\n                  -webkit-transformtransition: all 400ms ease-in-out 0s;\n                }\n              " }} />
                                            <div className="text-center modeltheme_button wow fadeInUp animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}><a href className="button-winona btn btn-lg btn_custom_5c954271b249a" style={{color: '#000000'}}>CONTÁCTANOS</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                        </div>{/* .entry-content */}
                    </article>{/* #post-## */}
                </main>
            </div>
        </div>
    </div>
        );
    }
}
export default HomeContent;