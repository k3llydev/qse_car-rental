import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/styles.css';
import Header from './Header'
import * as serviceWorker from './serviceWorker';

// function ParamsExample() {
//     return (
//       <Router>
//         <div>
//           <Route path="/" component={Home} />
//           <Route path="/:id" component={URLHandler} />
  
//         </div>
//       </Router>
//     );
//   }
  

  
  //export default ParamsExample;





ReactDOM.render(
    <div>
        <Header />
    </div>
, document.getElementById('root'));



// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();