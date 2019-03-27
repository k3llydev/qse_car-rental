import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return(
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
                              noValidate="novalidate"
                            >
                              <div style={{ display: "none" }}>
                                <input
                                  type="hidden"
                                  name="_wpcf7"
                                  defaultValue={7104}
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_version"
                                  defaultValue="5.1.1"
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_locale"
                                  defaultValue="en_US"
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_unit_tag"
                                  defaultValue="wpcf7-f7104-p1271-o1"
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_container_post"
                                  defaultValue={1271}
                                />
                                <input
                                  type="hidden"
                                  name="g-recaptcha-response"
                                  defaultValue
                                />
                              </div>
                              <div className="col-md-6">
                                <div className="first-name-input">
                                  <label>Nombre</label>
                                  <br />
                                  <span className="wpcf7-form-control-wrap first-name">
                                    <input
                                      type="text"
                                      name="first-name"
                                      defaultValue
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
                                      name="last-name"
                                      defaultValue
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
                                      name="your-email"
                                      defaultValue
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
                                      name="your-subject"
                                      defaultValue
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
                                      name="your-message"
                                      cols={40}
                                      rows={10}
                                      className="wpcf7-form-control wpcf7-textarea"
                                      aria-invalid="false"
                                      defaultValue={""}
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
        )
    }
}
export default Contact;