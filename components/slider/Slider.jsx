import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

/*
 * http://www.devtrix.net/sliderman/download.html
 * 

class Slider extends Component {
    render() {
        return (<div>Slider</div>);
    }
};
 
export default Slider;
*/
/*
<div id="slider_container_2">
  <div id="SliderName_2">
    <img src="demos/demo_2/img/1.jpg" width="700" height="450" alt="Demo2 first" title="Demo2 first" />
    <div class="SliderName_2Description">Featured model: <strong>Charlize Theron</strong></div>
    ...
    <img src="demos/demo_2/img/2.jpg" width="700" height="450" alt="Demo2 second" title="Demo2 second" />
    ...
    <a href="http://www.devtrix.net">
      <img src="demos/demo_2/img/2.jpg" width="700" height="450" alt="Demo2 second" title="Demo2 second" />
    </a>
    <div class="SliderName_2Description">Featured model: <strong>Charlize Theron</strong></div>
  </div>
  <div id="SliderNameNavigation_2"></div>
</div>
*/
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