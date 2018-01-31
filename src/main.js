
import ReactDOM from 'react-dom';
import Navigator from '../components/Navigator.jsx';
import React, { Component } from 'react';
import style from '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Slider from '../components/slider/Slider.jsx';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
ReactDOM.render(
	<div><Header/>
		<Slider/>
		<Footer/>
	</div>
	, 
    /*Display*/
	document.querySelector('#rootContent')
);
