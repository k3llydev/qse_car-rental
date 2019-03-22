import React, {Component} from 'react'
// import './css/HomeFooter.css'

class HomeFooter extends Component{
    render(){
        return(
            <footer>
    {/* FOOTER TOP */}
    <div className="row footer-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 footer-row-1">
                    <div className="row">
                        <div className="col-md-3 sidebar-1">
                            <aside id="text-2" className="widget vc_column_vc_container widget_text">
                                <h1 className="widget-title">NOSOTROS</h1>
                                <div className="textwidget">
                                    <p>Somos una empresa 100% mexicana, comprometida con la creación de nuevos empleos, a&nbsp;través de la búsqueda constante de nuevas oportunidades de negocio, que garanticen un medio ambiente saludable y de protección a la naturaleza.</p>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3 sidebar-2">
                            <aside id="nav_menu-5" className="widget vc_column_vc_container widget_nav_menu">
                                <h1 className="widget-title">SERVICIO</h1>
                                <div className="menu-primary-container">
                                    <ul id="menu-primary-1" className="menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-869 current_page_item menu-item-7874"><a href="http://qserviceexp.com/new/es/home/main-home/">INICIO</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7877"><a href="http://qserviceexp.com/new/vehiculos/">VEHÍCULOS</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7876"><a href="http://qserviceexp.com/new/servicios/">SERVICIOS</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7875"><a href="http://qserviceexp.com/new/nosotros/">NOSOTROS</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7873"><a href="http://qserviceexp.com/new/contacto/">CONTACTO</a></li>
                                        <li className="lang-item lang-item-89 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-8011-en">
                                            <a href="http://qserviceexp.com/new/" hrefLang="en-US" lang="en-US"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" title="English" alt="English" /></a>
                                        </li>
                                        <li className="lang-item lang-item-92 lang-item-es current-lang menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-8011-es">
                                            <a href="http://qserviceexp.com/new/es/home/main-home/" hrefLang="es-MX" lang="es-MX"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHQSURBVHjaYmSI52ZgYmGAgD9/XvbdY2Jg+vfvH5AHJP/8+PFKUREkA+SCEUAAAZUyNUZ3MjAw/vv399ff30KCwkyMTAwM/4EAqO7/79+sOQUM//7/+/sHyL41bxZAAIHN/s/w7NOrv//+fv/9C6SO8T8C/Pv/694DEPX7N7OUJNAGgABiAdkM1A+0HWjIvz//wWbfu3IA6B5ZDWtmoNrfv8CO+8P05zfQYQABxMTw78/f/0CFf//8/fsbaO///49vnnhz/8Lqia13zu8EOuv/r1//fv/+9+v3v99/gDYABBALw69fIOP//gGqBuoBamATEPvCxMclpy0grf4faP2fP2AH/AEygDYABBATA5DxD2Q2EAGNAmrYd/boUw4hQQP9XacO/gM6CWzD/z8gBPQvQAABNTAAnQ6x4RfQ0wz/nUyd/315C7TN2coDqP/vr9//wU76D1TEwAAQQEAnMQCdD7bh9y+gH/79FxIQjfSMhQbSr1//QUHHAAyX/3//ATUABBBIw+9/f8R5hIEavv3+ycjICLQXQoIYTEyscrKgkAcG5Z/fQE8DBBAjgy04Gn+Ao/EDw8VtF9mY2IDe+wcGv758eWZrywRWAvYAA0CAAQD6o1TwTGkEKQAAAABJRU5ErkJggg==" title="Español" alt="Español" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3 sidebar-3">
                            <aside id="rentacarwp_address_social_icons-4" className="widget vc_column_vc_container widget_rentacarwp_address_social_icons">
                                <div className="sidebar-social-networks address-social-links">
                                    <h1 className="widget-title">CONTACTO CDMX </h1>
                                    <div className="contact-details">
                                        <p><i className="fa fa-phone" aria-hidden="true" />(55) 8661 1130</p>
                                        <p><i className="fa fa-envelope" aria-hidden="true" />cdmx@qserviceexp.com</p>
                                        <p><i className="fa fa-map-marker" aria-hidden="true" />Juan Sánchez Azcona #1546, Col. Del Valle, CDMX</p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3 sidebar-4">
                            <aside id="text-6" className="widget vc_column_vc_container widget_text">
                                <h1 className="widget-title">CONTACTO CANCÚN</h1>
                                <div className="textwidget">
                                    <div className="contact-details">
                                        <p><i className="fa fa-phone" aria-hidden="true" />(998) 253 9634</p>
                                        <p><i className="fa fa-envelope" aria-hidden="true" />cancun@qserviceexp.com</p>
                                        <p><i className="fa fa-map-marker" aria-hidden="true" />Calle Chiabal, Mza 7, Lte. 3, SM 25, Cancún Cancún, Mexico</p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 footer-row-2">
                    <div className="row">
                        <div className="col-md-4 sidebar-1" />
                        <div className="col-md-2 sidebar-2" />
                        <div className="col-md-2 sidebar-3" />
                        <div className="col-md-2 sidebar-4" />
                        <div className="col-md-2 sidebar-5" /></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 footer-row-3">
                    <div className="row">
                        <div className="col-md-3 sidebar-1" />
                        <div className="col-md-2 sidebar-2" />
                        <div className="col-md-2 sidebar-3" />
                        <div className="col-md-2 sidebar-4" />
                        <div className="col-md-2 sidebar-5" /></div>
                </div>
            </div>
        </div>
    </div>
    {/* FOOTER BOTTOM */}
    <div className="footer-div-parent">
        <div className="container footer">
            <div className="col-md-3">
                <a className="logo-footer" href="http://qserviceexp.com/new">
                    <img src="http://qserviceexp.com/new/wp-content/uploads/2018/11/Logo-QS-Footer.png" alt="QService Experience" />
                </a>
            </div>
            <div className="col-md-6">
                <p className="copyright text-center">©2019 Q SERVICE EXPERIENCE. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-3">
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com/qserviceexp"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/qserviceexp"><i className="fa fa-twitter" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/qserviceexp/"><i className="fa fa-instagram" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
        );
    }
}

export default HomeFooter;