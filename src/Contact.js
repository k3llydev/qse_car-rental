import React, {Component} from 'react'
import './css/Contact.css'
import HomeFooter from './HomeFooter'

class Contact extends Component{

  handleFormSubmit = (event) =>{
    event.preventDefault()
    var formData = {}
    for(var i=0; i<event.target.elements.length-1; i++){
      formData[event.target.elements[i].name] = event.target.elements[i].value
    }
    fetch("http://qserviceexp.com/api/contact.php", {
            method: "post",
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            })
            .then((res) => res.json())
            .then((data) =>  alert(data))
            .catch((err)=>console.log(err))
  }

    render(){
        return(
          <div>


<div className="theme_header_slider">
  <div
    className="forcefullwidth_wrapper_tp_banner"
    id="rev_slider_1_1_forcefullwidth"
    style={{
      position: "relative",
      width: "100%",
      height: "auto",
      marginTop: 0,
      marginBottom: 0
    }}
  >
    <div
      id="rev_slider_1_1_wrapper"
      className="rev_slider_wrapper fullwidthbanner-container"
      data-source="gallery"
      style={{
        margin: "0px auto",
        background: "rgb(31, 29, 36)",
        padding: 0,
        height: 500,
        position: "absolute",
        overflow: "visible",
        width: 1920,
        left: 0
      }}
    >
      {" "}
      {/* START REVOLUTION SLIDER 5.4.3.1 fullwidth mode */}{" "}
      <div
        id="rev_slider_1_1"
        className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus"
        style={{
          maxHeight: 500,
          marginTop: 0,
          marginBottom: 0,
          height: 500
        }}
        data-version="5.4.3.1"
        data-slideactive="rs-1"
      >
        {" "}
        <ul
          className="tp-revslider-mainul"
          style={{
            visibility: "visible",
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            maxHeight: "none"
          }}
        >
          {" "}
          {/* SLIDE */}{" "}
          <li
            data-index="rs-1"
            data-transition="fade"
            data-slotamount="default"
            data-hideafterloop={0}
            data-hideslideonmobile="off"
            data-easein="default"
            data-easeout="default"
            data-masterspeed="default"
            data-thumb="http://qserviceexp.com/new/wp-content/uploads/2018/11/Img-Contacto-100x50.jpg"
            data-rotate={0}
            data-saveperformance="off"
            data-title="First Slider"
            data-description
            className="tp-revslider-slidesli active-revslide"
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: 20,
              visibility: "inherit",
              opacity: 1,
              backgroundColor: "rgba(255, 255, 255, 0)"
            }}
          >
            {" "}
            {/* MAIN IMAGE */}{" "}
            <div
              className="slotholder"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                width: "100%",
                height: "100%",
                visibility: "inherit",
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)"
              }}
            >
              {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="http://qserviceexp.com/new/wp-content/uploads/2018/11/Img-Contacto.jpg" alt="" title="Img-Contacto" width="1784" height="497" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="110" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" class="rev-slidebg defaultimg" data-no-retina="">*/}
              <div
                className="tp-bgimg defaultimg "
                data-bgcolor="undefined"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    'url("http://qserviceexp.com/new/wp-content/uploads/2018/11/Img-Contacto.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                  visibility: "inherit",
                  zIndex: 20
                }}
                src="http://qserviceexp.com/new/wp-content/uploads/2018/11/Img-Contacto.jpg"
              />
              <div
                className="tp-kbimg-wrap"
                style={{
                  zIndex: 2,
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  position: "absolute",
                  transform: "translate3d(-96px, -44.1883px, 0px)",
                  transformOrigin: "0% 0% 0px"
                }}
              >
                <img
                  className="tp-kbimg"
                  src="http://qserviceexp.com/new/wp-content/uploads/2018/11/Img-Contacto.jpg"
                  style={{
                    position: "absolute",
                    height: 535,
                    width: 1920,
                    transform:
                      "translate3d(0px, 0px, 0px) scale(1.1, 1.1)",
                    transformOrigin: "0% 0% 0px"
                  }}
                  width={1784}
                  height={497}
                />
              </div>
            </div>{" "}
            {/* LAYERS */}{" "}
          </li>{" "}
        </ul>{" "}
        <div
          className="tp-bannertimer tp-bottom"
          style={{ visibility: "hidden !important", width: "0%" }}
        />{" "}
        <div className="tp-loader off" style={{ display: "none" }}>
          <div className="dot1" />
          <div className="dot2" />
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>{" "}
    </div>
    <div
      className="tp-fullwidth-forcer"
      style={{ width: "100%", height: 500 }}
    />
  </div>
  {/* END REVOLUTION SLIDER */}
</div>













            <div
            data-vc-full-width="true"
            data-vc-full-width-init="true"
            className="vc_row wpb_row vc_row-fluid vc_custom_1492778520938">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner vc_custom_1492686189967">
                <div className="wpb_wrapper">
                <br /><br />
                  <center><h1>Contáctanos</h1> <br />
                  <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1492686361431">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div
                            role="form"
                            className="wpcf7"
                            id="wpcf7-f7104-p1271-o1"
                            lang="en-US"
                            dir="ltr"
                          >


                            <form
                              action="/new/contacto/#wpcf7-f7104-p1271-o1"
                              method="post"
                              className="wpcf7-form"
                              onSubmit={this.handleFormSubmit}
                            >
                              <div className="col-md-6">
                                <div className="first-name-input">
                                  <label>Nombre</label>
                                  <br />
                                  <span className="wpcf7-form-control-wrap first-name">
                                    <input
                                      type="text"
                                      name="firstName"
                                      placeholder="Nombre"
                                      size={40}
                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                      aria-required="true"
                                      aria-invalid="false"
                                    />
                                  </span>
                                </div>
                                <div className="last-name-input">
                                  <label>Apellido</label>
                                  <br />
                                  <span className="wpcf7-form-control-wrap last-name">
                                    <input
                                      type="text"
                                      name="lastName"
                                      placeholder="Apellidos"
                                      size={40}
                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                      aria-required="true"
                                      aria-invalid="false"
                                    />
                                  </span>
                                </div>
                                <div className="email-input">
                                  <label>Email</label>
                                  <br />
                                  <span className="wpcf7-form-control-wrap your-email">
                                    <input
                                      type="email"
                                      name="email"
                                      placeholder="Correo electrónico"
                                      size={40}
                                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                      aria-required="true"
                                      aria-invalid="false"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="subject-input">
                                  <label>Asunto</label>
                                  <br />
                                  <span className="wpcf7-form-control-wrap your-subject">
                                    <input
                                      type="text"
                                      name="subject"
                                      placeholder="Asunto del mensaje"
                                      size={40}
                                      className="wpcf7-form-control wpcf7-text"
                                      aria-invalid="false"
                                    />
                                  </span>
                                </div>
                                <div className="message-input">
                                  <label>Mensaje</label>
                                  <br />
                                  <span className="wpcf7-form-control-wrap your-message">
                                    <textarea
                                      name="message"
                                      cols={40}
                                      rows={10}
                                      className="wpcf7-form-control wpcf7-textarea"
                                      aria-invalid="false"
                                      placeholder="Su mensaje..."
                                    />
                                  </span>
                                </div>
                              </div>
                              <p>
                                <input
                                  type="submit"
                                  defaultValue="Enviar →"
                                  className="wpcf7-form-control wpcf7-submit"
                                />
                                <span className="ajax-loader" />
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </center>
              </div>
            </div>
          </div>
          </div>
          <HomeFooter />
          </div>
        )
    }
}
export default Contact;