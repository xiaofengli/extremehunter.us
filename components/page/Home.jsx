import React, {Component}  from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Slider from '../slider/Slider.jsx';
import MyStyle from '../../components/css/style.css';
class Home extends Component {
   render() {
      return (
         <div>
            <Slider/>
            <Footer/>
           
         </div>
      );
   }
}
export default Home;