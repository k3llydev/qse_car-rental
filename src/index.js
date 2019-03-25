import React from 'react';
import ReactDOM from 'react-dom';
// import './css/styles.css';
import Header from './Header'
import * as serviceWorker from './serviceWorker';

import './css/main-styles.css'
import './css/header-styles.css'
import './css/footer-styles.css'
import './css/includes/animate.css'
import './css/includes/media_screens.css'
import './css/includes/composer.css'
import './css/includes/responsive.css'
import './css/includes/sidebar-effects.css'
import './css/another-home-styles.css'

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
        <Header />
, document.getElementById('page'));



// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();