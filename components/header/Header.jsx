import React, {Component}  from 'react';
import Navigator from '../../components/Navigator.jsx';
//import MyStyle from '../../components/css/style.css';

export default class Header extends Component {
   render() {
      return (
         <header class="header">
  		 <div class= "container">
  		 	<div class="logo"></div>
  		 	<Navigator infiniteLoop = 'true' />
 	 	 </div>
	     </header>
      );
   }
}
