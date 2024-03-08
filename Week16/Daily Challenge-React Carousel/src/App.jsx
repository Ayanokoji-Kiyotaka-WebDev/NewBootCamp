import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from './assets/istockphoto-1391239391-612x612.jpg'
import img2 from './assets/istockphoto-157594139-612x612.jpg'
import img3 from './assets/istockphoto-641067732-612x612.jpg'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} style={{ width: '400px' }}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} style={{ width: '400px' }} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
              <img src={img3} style={{ width: '400px' }}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}


function App() {


  return (
    <>
     
        <DemoCarousel />
    </>
  )
}

export default App
