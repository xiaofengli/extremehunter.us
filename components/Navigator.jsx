import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } 
	from 'react-router-dom';
import Home from './page/Home.jsx';
import Products from './page/Products.jsx';
import Partners from './page/Partners.jsx';
import AboutUS from './page/AboutUS.jsx';

class Navigator extends Component {
   render() {
      return (
         <Router>
            <div><nav>
                  <Link to={'/'}>Home</Link> |
                  <Link to={'/products'}>Products</Link> |
                  <Link to={'/partners'}>Partners</Link> |
                  <Link to={'/aboutus'}>About US</Link>
                 </nav>
               <hr/>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/products' component={Products} />
                  <Route exact path='/partners' component={Partners} />
                  <Route exact path='/aboutus' component={AboutUS} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default Navigator;