import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/styles.css';
import App from './App';
import Home from './Home'
import Header from './Header'
import * as serviceWorker from './serviceWorker';

function ParamsExample() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/:id" component={URLHandler} />
  
        </div>
      </Router>
    );
  }
  


  function URLHandler({ match }) {
      var result;
      if(match.params.id == "search" ){
            return(<App />);
      }else{
          return(
              <h1>
                  Not found
              </h1>
          );
      }
  }
  
  export default ParamsExample;





ReactDOM.render(
    <div>
        <Header />
        <ParamsExample />
    </div>
, document.getElementById('root'));



// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();