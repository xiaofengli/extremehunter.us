
import ReactDOM from 'react-dom';
import Navigator from './components/Navigator.jsx';
import React, { Component } from 'react';
import style from './node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import DemoCarousel from './components/slider/Slider.jsx';

ReactDOM.render(
	<div><Navigator/>
		 <DemoCarousel/>
	</div>
	, document.querySelector('#demo-carousel'));
