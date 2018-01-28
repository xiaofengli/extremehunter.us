import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="./components/slider/images/1.jpeg" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src="./components/slider/images/2.jpeg" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src="./components/slider/images/3.jpeg" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  }
}
export default DemoCarousel
//ReactDOM.render(<DemoCarousel />, document.querySelector('#demo-carousel'));