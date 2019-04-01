import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import './css/Header.css'
import Search from './Search';
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Services from './Services'
import Vehicles from './Vehicles'
import Reservation from './Reservation'

function URLHandler({ match }) {
  switch(match.params.action){
    case "vehicles":
      return(<Vehicles />);

    case "services":
      return(<Services />)

    case "about-us":
      return(<AboutUs />)

    case "contact":
      return(<Contact />)

    case "reservation":
      return(<Reservation />)


    default:
      return(<h1>404 - Not found</h1>);
  }
}

function searchCar(){
  return(<Search/>);
}


class Header extends Component{

    constructor(props){
      super(props);
      this.setState({
        logo: ""
      });
    }
  
    render(){
      return(
          <Router>
        <header className="header1">
    <div className="container logo-infos">
      <div className="row" />
    </div>
    <nav className="navbar navbar-default" id="modeltheme-main-head">
      <div className="row">
        <div className="navbar-header col-md-2">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <h1 className="logo">
            <a href="http://qserviceexp.com/new">
              <img
                src="http://qserviceexp.com/new/wp-content/uploads/2018/11/Logo-QS-Menu.png"
                alt="QService Experience"
              />
            </a>
          </h1>
        </div>
        <div id="navbar" className="navbar-collapse collapse col-md-8">
          <div className="menu-primary-container">
            <ul id="menu-primary" className="menu">
              <li
                id="menu-item-7874"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-869 current_page_item menu-item-7874"
              >
                <Link to="/">INICIO</Link>
              </li>
              <li
                id="menu-item-7877"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7877"
              >
                <Link to="/vehicles">VEHÍCULOS</Link>
              </li>
              <li
                id="menu-item-7876"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7876"
              >
                <Link to="/services">SERVICIOS</Link>
              </li>
              <li
                id="menu-item-7875"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7875"
              >
                <Link to="/about-us">NOSOTROS</Link>
              </li>
              <li
                id="menu-item-7873"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7873"
              >
                <Link to="/contact">CONTACTO</Link>
              </li>
              <li
                id="menu-item-8011-en"
                className="lang-item lang-item-89 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-8011-en"
              >
                <a
                  href="http://qserviceexp.com/new/"
                  hrefLang="en-US"
                  lang="en-US"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"
                    title="English"
                    alt="English"
                  />
                </a>
              </li>
              <li
                id="menu-item-8011-es"
                className="lang-item lang-item-92 lang-item-es current-lang menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-8011-es"
              >
                <a
                  href="http://qserviceexp.com/new/es/home/main-home/"
                  hrefLang="es-MX"
                  lang="es-MX"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHQSURBVHjaYmSI52ZgYmGAgD9/XvbdY2Jg+vfvH5AHJP/8+PFKUREkA+SCEUAAAZUyNUZ3MjAw/vv399ff30KCwkyMTAwM/4EAqO7/79+sOQUM//7/+/sHyL41bxZAAIHN/s/w7NOrv//+fv/9C6SO8T8C/Pv/694DEPX7N7OUJNAGgABiAdkM1A+0HWjIvz//wWbfu3IA6B5ZDWtmoNrfv8CO+8P05zfQYQABxMTw78/f/0CFf//8/fsbaO///49vnnhz/8Lqia13zu8EOuv/r1//fv/+9+v3v99/gDYABBALw69fIOP//gGqBuoBamATEPvCxMclpy0grf4faP2fP2AH/AEygDYABBATA5DxD2Q2EAGNAmrYd/boUw4hQQP9XacO/gM6CWzD/z8gBPQvQAABNTAAnQ6x4RfQ0wz/nUyd/315C7TN2coDqP/vr9//wU76D1TEwAAQQEAnMQCdD7bh9y+gH/79FxIQjfSMhQbSr1//QUHHAAyX/3//ATUABBBIw+9/f8R5hIEavv3+ycjICLQXQoIYTEyscrKgkAcG5Z/fQE8DBBAjgy04Gn+Ao/EDw8VtF9mY2IDe+wcGv758eWZrywRWAvYAA0CAAQD6o1TwTGkEKQAAAABJRU5ErkJggg=="
                    title="Español"
                    alt="Español"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  </header>
  <Route exact path="/" component={Home} />
  <Route exact path="/search/car/" component={searchCar} />
  <Route exact path="/:action/" component={URLHandler} />
  </Router>
      );
    }
  }
  export default Header;