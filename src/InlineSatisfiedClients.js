import React, {Component} from 'react'
import './css/InlineSatisfiedClients.css'

class InlineSatisfiedClients extends Component{
    render(){
        return(

            <div
              data-vc-full-width="true"
              data-vc-full-width-init="true"
              className="vc_row wpb_row vc_row-fluid vc_custom_1543112377388 vc_row-has-fill"
              style={{
                position: "relative",
                boxSizing: "border-box",
                width: "100%"
              }}
            >
              <div className="wpb_column vc_column_container vc_col-sm-3">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div
                      className="stats-block statistics wow fadeIn animated"
                      style={{
                        border: "2px solid rgba(142, 142, 142, 0.01)",
                        visibility: "visible",
                        animationName: "fadeIn"
                      }}
                    >
                      <div className="stats-head">
                        <p
                          className="stat-number skill"
                          style={{
                            borderBottom:
                              "2px solid rgba(142,142,142,0.01)"
                          }}
                        >
                          <span
                            className="skill-count"
                            style={{ color: "#ffffff" }}
                          >
                            +320
                          </span>
                        </p>
                      </div>
                      <div
                        className="stats-content percentage"
                        data-perc={+320}
                      >
                        <p style={{ color: "#ffffff" }}>
                          CLIENTES SATISFECHOS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-3">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div
                      className="stats-block statistics wow fadeIn animated"
                      style={{
                        border: "2px solid rgba(142, 142, 142, 0.01)",
                        visibility: "visible",
                        animationName: "fadeIn"
                      }}
                    >
                      <div className="stats-head">
                        <p
                          className="stat-number skill"
                          style={{
                            borderBottom:
                              "2px solid rgba(142,142,142,0.01)"
                          }}
                        >
                          <span
                            className="skill-count"
                            style={{ color: "#ffffff" }}
                          >
                            18
                          </span>
                        </p>
                      </div>
                      <div
                        className="stats-content percentage"
                        data-perc={18}
                      >
                        <p style={{ color: "#ffffff" }}>DESTINOS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-3">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div
                      className="stats-block statistics wow fadeIn animated"
                      style={{
                        border: "2px solid rgba(142, 142, 142, 0.01)",
                        visibility: "visible",
                        animationName: "fadeIn"
                      }}
                    >
                      <div className="stats-head">
                        <p
                          className="stat-number skill"
                          style={{
                            borderBottom:
                              "2px solid rgba(142,142,142,0.01)"
                          }}
                        >
                          <span
                            className="skill-count"
                            style={{ color: "#ffffff" }}
                          >
                            34
                          </span>
                        </p>
                      </div>
                      <div
                        className="stats-content percentage"
                        data-perc={34}
                      >
                        <p style={{ color: "#ffffff" }}>UNIDADES</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-3">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div
                      className="stats-block statistics wow fadeIn animated"
                      style={{
                        border: "2px solid rgba(142, 142, 142, 0.01)",
                        visibility: "visible",
                        animationName: "fadeIn"
                      }}
                    >
                      <div className="stats-head">
                        <p
                          className="stat-number skill"
                          style={{
                            borderBottom:
                              "2px solid rgba(142,142,142,0.01)"
                          }}
                        >
                          <span
                            className="skill-count"
                            style={{ color: "#ffffff" }}
                          >
                            +10{" "}
                          </span>
                        </p>
                      </div>
                      <div
                        className="stats-content percentage"
                        data-perc={+10}
                      >
                        <p style={{ color: "#ffffff" }}>
                          AÑOS DE EXPERIENCIA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
export default InlineSatisfiedClients