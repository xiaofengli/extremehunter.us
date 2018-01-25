import React from 'react';
import ReactDOM from 'react-dom';
import Navigator from './components/Navigator.jsx';
import DemoCarousel from './components/Slider/Slider.jsx';
//ReactDOM.render(<Navigator />, document.getElementById('navigator'));
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));