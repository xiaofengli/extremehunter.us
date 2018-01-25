import React from 'react';
import ReactDOM from 'react-dom';
import Navigator from './components/Navigator.jsx';
import DemoCarousel from './components/Slider/Slider.jsx';

/*
ReactDOM.render(
		<div><Navigator/>
		     <DemoCarousel/>
		</div>
		, document.querySelector('#demo-carousel'));

* need to get css working and use class .demo-carousel
*/

ReactDOM.render(
		<DemoCarousel/>
		, document.querySelector('#demo-carousel'));