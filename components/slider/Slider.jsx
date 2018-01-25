import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '!!css-loader!react-responsive-carousel/lib/styles/carousel.min.css'
/*
 * https://www.npmjs.com/package/react-responsive-carousel
 * */

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./images/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./images/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));